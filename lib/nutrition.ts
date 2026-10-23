import type {CatalogRecipe} from './catalog';
export type MacroKey='kcal'|'protein'|'carbs'|'fat';
export type MacroTarget={kcal:number;protein:number;carbs:number;fat:number};
export type MacroStatus='below'|'within'|'above'|'unknown';
export type MacroRow={key:MacroKey;label:string;unit:string;actual:number|null;target:number;difference:number|null;percent:number|null;status:MacroStatus};
const round=(v:number)=>Math.round(v*10)/10;
/** If even one selected recipe lacks a macro, the corresponding total is unknown. */
export function analyzeMeals(recipes:CatalogRecipe[],target:MacroTarget):MacroRow[]{
 const config:{key:MacroKey;label:string;unit:string}[]=[
 {key:'kcal',label:'Energía',unit:'kcal'},
 {key:'protein',label:'Proteína',unit:'g'},
 {key:'carbs',label:'Carbohidratos',unit:'g'},
 {key:'fat',label:'Grasas',unit:'g'}];
 return config.map(({key,label,unit})=>{
  const known=recipes.length>0&&recipes.every(r=>r.nutritionMethod!=='unavailable'&&typeof r[key]==='number'&&Number.isFinite(r[key]));
  const actual=known?round(recipes.reduce((sum,r)=>sum+(r[key] as number),0)):null;
  const desired=target[key];
  const difference=actual===null?null:round(actual-desired);
  const percent=actual===null||desired<=0?null:round(actual/desired*100);
  // Band is a planning signal, not a medical cutoff.
  const status:MacroStatus=actual===null?'unknown':desired<=0?'unknown':actual>desired*1.1?'above':actual<desired*.9?'below':'within';
  return {key,label,unit,actual,target:desired,difference,percent,status};
 });
}
export function macroTargets(profile:{customMacros:boolean;calories:number;protein:number;carbs:number;fats:number},estimated:{calories:number;protein:number}):MacroTarget{
 if(profile.customMacros)return {kcal:profile.calories,protein:profile.protein,carbs:profile.carbs,fat:profile.fats};
 // An explicit starting split; not clinical advice. Calorie estimate can differ slightly due to rounding.
 const kcal=estimated.calories,protein=estimated.protein,fat=Math.round(kcal*.28/9);
 return {kcal,protein,carbs:Math.max(0,Math.round((kcal-protein*4-fat*9)/4)),fat};
}
export function mealTarget(total:MacroTarget,weight:number):MacroTarget{
 return {kcal:Math.round(total.kcal*weight),protein:Math.round(total.protein*weight),carbs:Math.round(total.carbs*weight),fat:Math.round(total.fat*weight)};
}
export const fourMealWeights=[.25,.35,.25,.15];

/** Auditoría de coherencia: 4/4/9 es aproximado, puede diferir por fibra,
 * polialcoholes, redondeos y método de etiquetado. No corrige la fuente. */
export function auditEnergy(r:CatalogRecipe):{estimatedFromMacros:number;reported:number;difference:number;flagged:boolean}|null{
 if(r.nutritionMethod==='unavailable'||[r.kcal,r.protein,r.carbs,r.fat].some(v=>typeof v!=='number'||!Number.isFinite(v)))return null;
 const estimatedFromMacros=Math.round(r.protein*4+(r.carbs as number)*4+(r.fat as number)*9);
 const difference=estimatedFromMacros-r.kcal;
 return {estimatedFromMacros,reported:r.kcal,difference,flagged:Math.abs(difference)>Math.max(35,r.kcal*.15)};
}
