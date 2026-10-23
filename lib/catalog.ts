import {recipes,type Recipe,type Meal} from './data';
import {reviewedRecipes} from './reviewed-recipes';
import {withCalculatedNutrition} from './food-composition';
import batch002 from '../data/recipe-research/batch-002-2026-10-22.json';
import batch003 from '../data/recipe-research/batch-003-2026-10-22.json';
import batch004 from '../data/recipe-research/batch-004-2026-10-22.json';
import batch005 from '../data/recipe-research/batch-005-2026-10-22.json';
export type CatalogRecipe=Recipe&{
 carbs?:number;fat?:number;sourceUrl?:string;sourceName?:string;
 status?:'pilot'|'reference';imageUrl?:string;
 nutritionMethod?:'ingredient_estimate'|'published_reference'|'unavailable';
 mainIngredients?:string[];servingDescription?:string;
};
const mealFor=(group:string,name:string):Meal=>{
 const n=name.toLocaleLowerCase('es');
 if(group==='Desayunos, snacks y postres')return /pizza|omelette|huevo|avena|desayuno|frittata|chía|chia|bowl/.test(n)?'desayuno':'colacion';
 if(/ensalada|sopa|bowl|tortita/.test(n))return 'cena';
 return 'comida';
};
type ResearchRecipe={id:string;nameEs:string;editorialGroup:string;mealType?:string;source:{name:string;url:string};mainIngredients?:string[];nutritionPerServing?:{caloriesKcal?:number|null;proteinG?:number|null;carbohydratesG?:number|null;fatG?:number|null};serving?:{description?:string}};
const research=[...batch002.recipes,...batch003.recipes,...batch004.recipes,...batch005.recipes] as ResearchRecipe[];
const researchRefs:CatalogRecipe[]=research.map(r=>{
 const n=r.nutritionPerServing;
 const kcal=typeof n?.caloriesKcal==='number'?n.caloriesKcal:undefined;
 const protein=typeof n?.proteinG==='number'?n.proteinG:undefined;
 const carbs=typeof n?.carbohydratesG==='number'?n.carbohydratesG:undefined;
 const fat=typeof n?.fatG==='number'?n.fatG:undefined;
 return {
  id:r.id,name:r.nameEs,meal:mealFor(r.editorialGroup,r.nameEs),
  kcal:kcal??0,protein:protein??0,carbs,fat,emoji:'🍽️',ingredients:[],
  mainIngredients:r.mainIngredients||[],servingDescription:r.serving?.description,
  sourceUrl:r.source.url,sourceName:r.source.name,status:'reference',
  nutritionMethod:kcal!==undefined&&protein!==undefined&&carbs!==undefined&&fat!==undefined?'published_reference':'unavailable'
 };
});
export const catalog:CatalogRecipe[]=[
 ...recipes.map(r=>({...withCalculatedNutrition(r),status:'pilot' as const})),
 ...reviewedRecipes.map(r=>({
  id:r.id,name:r.name,meal:mealFor(r.group,r.name),kcal:r.calories,protein:r.protein,
  carbs:r.carbs,fat:r.fat,emoji:'🍽️',ingredients:[],sourceUrl:r.url,sourceName:r.source,
  status:'reference' as const,nutritionMethod:'published_reference' as const
 })),
 ...researchRefs
];
export const byId=new Map(catalog.map(r=>[r.id,r]));
export function getRecipe(id:string){return byId.get(id)}
export function isReference(r:CatalogRecipe){return r.status==='reference'}
