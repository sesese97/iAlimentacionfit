import type {CatalogRecipe} from './catalog';
import {getRecipe} from './catalog';
import type {Ingredient} from './data';

export type BatchPrep={
 id:string;name:string;days:number[];totalServings:number;ingredients:Ingredient[];
};
const suitable=/arroz|pasta|lentejas|frijoles|picadillo|tinga|guisad|fajitas|bowl|enchiladas|pollo|sopa|curry|lasana|lasaña|chili/i;
const fragile=/ensalada|tostada|tacos|quesadilla|pescado|atún|atun|camarón|camaron|licuado|aguacate|mollete|sándwich|sandwich/i;
export function isBatchable(r:CatalogRecipe):boolean{
 return r.ingredients.length>0&&suitable.test(r.name)&&!fragile.test(r.name);
}
/** Batch only identical recipes in the same slot on consecutive days.
 * Grocery grams and nutritional values still sum every portion; no false savings.
 */
export function batchOptimize(ids:string[],portions:number[],activeSlots:number[],span:2|3):string[]{
 const result=[...ids];
 for(const slot of activeSlots){
  if(slot===1||slot===3||slot===5)continue;
  for(let day=0;day<7;day+=span){
   const origin=day*6+slot;
   const candidate=getRecipe(result[origin]);
   if(!candidate||!isBatchable(candidate))continue;
   for(let offset=1;offset<span&&day+offset<7;offset++){
    const index=(day+offset)*6+slot;
    const old=getRecipe(result[index]);
    if(!old||!old.ingredients.length)continue;
    // Only swap similar-energy dishes; do not silently disrupt targets.
    const factor=portions[index]||1,sourceFactor=portions[origin]||1;
    if(Math.abs(candidate.kcal*factor-old.kcal*factor)>Math.max(90,old.kcal*factor*.18))continue;
    if(Math.abs(candidate.protein*factor-old.protein*factor)>Math.max(10,old.protein*factor*.25))continue;
    if(sourceFactor!==factor)continue;
    result[index]=candidate.id;
   }
  }
 }
 return result;
}
export function batchPreparations(ids:string[],portions:number[],activeSlots:number[]):BatchPrep[]{
 const groups=new Map<string,BatchPrep>();
 for(let day=0;day<7;day++)for(const slot of activeSlots){
  const index=day*6+slot,r=getRecipe(ids[index]);
  if(!r||!isBatchable(r))continue;
  const factor=portions[index]||1;
  const key=r.id;
  const existing=groups.get(key);
  if(existing){existing.days.push(day);existing.totalServings+=factor;for(const i of r.ingredients){const old=existing.ingredients.find(x=>x.name===i.name&&x.unit===i.unit);if(old)old.quantity+=i.quantity*factor;else existing.ingredients.push({...i,quantity:i.quantity*factor});}}
  else groups.set(key,{id:r.id,name:r.name,days:[day],totalServings:factor,ingredients:r.ingredients.map(i=>({...i,quantity:i.quantity*factor}))});
 }
 return [...groups.values()].filter(x=>x.days.length>1).sort((a,b)=>b.days.length-a.days.length);
}
