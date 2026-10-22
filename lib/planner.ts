import {recipes,days,meals,type Recipe,type Meal} from './data';
import {target,type Profile} from './experience';

/** Planner piloto: prioriza preferencias y proximidad a objetivos usando
 * valores energéticos ilustrativos. NO es un cálculo dietético validado. */
export type PlanResult={ids:string[];warnings:string[];daily:{kcal:number;protein:number}[]};
const clean=(s:string)=>s.toLocaleLowerCase('es-MX').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
export function excludedTerms(p:Profile){return (p.avoid+','+p.dislikes).split(',').map(clean).filter(Boolean)}
export function recipeAllowed(r:Recipe,p:Profile){
 const ingredients=r.ingredients.map(i=>clean(i.name));
 const terms=excludedTerms(p);
 if(terms.some(term=>ingredients.some(n=>n.includes(term)||term.includes(n))))return false;
 if(p.diet==='Vegetariana'&&ingredients.some(n=>['pollo','res','bistec','pavo','atun','pescado','carne'].some(a=>n.includes(a))))return false;
 if(p.diet==='Sin lácteos'&&ingredients.some(n=>['queso','leche','yogur','requeson','crema'].some(a=>n.includes(a))))return false;
 if(p.diet==='Sin gluten (preferencia)'&&ingredients.some(n=>['pan','bolillo','pasta','harina','avena'].some(a=>n.includes(a))))return false;
 return true;
}
function chooseDay(pools:Record<Meal,Recipe[]>,p:Profile,dayIndex:number,seed:number){
 const objective=p.customMacros?{calories:p.calories,protein:p.protein}:target(p);
 let candidates:{ids:string[];kcal:number;protein:number;score:number}[]=[];
 const slots=meals.map(m=>pools[m]);
 if(slots.some(x=>!x.length))return null;
 // La enumeración de 4 comidas se mantiene pequeña con el banco piloto.
 for(const a of slots[0])for(const b of slots[1])for(const c of slots[2])for(const d of slots[3]){
   const rs=[a,b,c,d],kcal=rs.reduce((v,r)=>v+r.kcal,0),protein=rs.reduce((v,r)=>v+r.protein,0);
   const proteinGap=Math.max(0,objective.protein-protein);
   const gap=Math.abs(objective.calories-kcal);
   const variety=rs.reduce((v,r,i)=>v+(Number(r.id.slice(1))*(i+3+dayIndex+seed)%13)/13,0);
   const score=gap/Math.max(1200,objective.calories)+proteinGap/Math.max(70,objective.protein)*0.65+variety*0.04;
   candidates.push({ids:rs.map(r=>r.id),kcal,protein,score});
 }
 candidates.sort((a,b)=>a.score-b.score);
 return candidates.slice(0,Math.min(15,candidates.length));
}
export function generatePlan(p:Profile,seed=0):PlanResult{
 const pools=Object.fromEntries(meals.map(m=>[m,recipes.filter(r=>r.meal===m&&recipeAllowed(r,p))])) as Record<Meal,Recipe[]>;
 const missing=meals.filter(m=>!pools[m].length);
 if(missing.length)return {ids:[],daily:[],warnings:['No hay suficientes recetas compatibles para '+missing.join(', ')+'. Modifica tus restricciones o espera más recetas; no se añadieron ingredientes que marcaste para evitar.']};
 const warnings:string[]=[];
 const targetValue=p.customMacros?{calories:p.calories,protein:p.protein}:target(p);
 const ids:string[]=[],daily:{kcal:number;protein:number}[]=[];
 const used=new Map<string,number>();
 for(let d=0;d<days.length;d++){
   const options=chooseDay(pools,p,d,seed);
   if(!options?.length)break;
   const best=options.map(option=>({...option,score:option.score+option.ids.reduce((v,id)=>v+(used.get(id)||0)*0.055,0)})).sort((a,b)=>a.score-b.score)[0];
   ids.push(...best.ids);daily.push({kcal:best.kcal,protein:best.protein});
   best.ids.forEach(id=>used.set(id,(used.get(id)||0)+1));
 }
 if(daily.some(d=>Math.abs(d.kcal-targetValue.calories)>targetValue.calories*0.15))warnings.push('El banco piloto no alcanza tu objetivo calórico en todos los días. Faltan recetas, porciones variables y cálculos nutricionales verificados.');
 if(daily.some(d=>d.protein<targetValue.protein*0.85))warnings.push('El menú piloto no alcanza tu objetivo de proteína en todos los días.');
 warnings.push('Las calorías y proteínas de las recetas son ilustrativas. No se han validado carbohidratos, grasas ni micronutrientes.');
 return {ids,daily,warnings};
}
