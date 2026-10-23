import {recipes,type Recipe,type Meal} from './data';
import {reviewedRecipes} from './reviewed-recipes';
export type CatalogRecipe=Recipe&{carbs?:number;fat?:number;sourceUrl?:string;sourceName?:string;status?:'pilot'|'reference';imageUrl?:string};
const mealFor=(group:string,name:string):Meal=>{
 const n=name.toLocaleLowerCase('es');
 if(group==='Desayunos, snacks y postres')return /pizza|omelette|huevo|avena|desayuno|frittata|chía|chia|bowl/.test(n)?'desayuno':'colacion';
 if(/ensalada|sopa|bowl|tortita/.test(n))return 'cena';
 return 'comida';
};
export const catalog:CatalogRecipe[]=[
 ...recipes.map(r=>({...r,status:'pilot' as const})),
 ...reviewedRecipes.map(r=>({
  id:r.id,name:r.name,meal:mealFor(r.group,r.name),kcal:r.calories,protein:r.protein,
  carbs:r.carbs,fat:r.fat,emoji:'🍽️',ingredients:[],sourceUrl:r.url,sourceName:r.source,
  status:'reference' as const
 }))
];
export const byId=new Map(catalog.map(r=>[r.id,r]));
export function getRecipe(id:string){return byId.get(id)}
export function isReference(r:CatalogRecipe){return r.status==='reference'}
