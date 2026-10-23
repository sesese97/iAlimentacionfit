import type {Ingredient,Recipe} from './data';
/**
 * Base de composición inicial aproximada por 100 g (o 100 ml para leche).
 * Valores de referencia genéricos, NO verificados por marca, corte o cocción.
 * Ingredientes r8/r14/r15: arroz, lentejas y pasta asumidos SECOS.
 * Pollo y carnes: pesos CRUDOS. Atún: peso escurrido aproximado por lata.
 * Una receta solo contabiliza los ingredientes explícitamente declarados;
 * aceite, aderezos, mermas y añadidos deben capturarse para cerrar macros.
 * Referencia para normalización posterior: USDA FoodData Central
 * https://fdc.nal.usda.gov/ y etiquetado de productos mexicanos.
 */
export type FoodComposition={kcal:number;protein:number;carbs:number;fat:number;pieceGrams?:number};
export type NutrientTotals={kcal:number;protein:number;carbs:number;fat:number};
export const foodComposition:Record<string,FoodComposition>={
 "Huevo":{kcal:143,protein:12.6,carbs:0.7,fat:9.5,pieceGrams:50},
 "Jitomate":{kcal:18,protein:0.9,carbs:3.9,fat:0.2},
 "Cebolla":{kcal:40,protein:1.1,carbs:9.3,fat:0.1},
 "Tortilla de maíz":{kcal:218,protein:5.7,carbs:44.6,fat:2.9,pieceGrams:25},
 "Avena":{kcal:389,protein:16.9,carbs:66.3,fat:6.9},
 "Yogur griego natural":{kcal:97,protein:9,carbs:3.9,fat:5},
 "Plátano":{kcal:89,protein:1.1,carbs:22.8,fat:0.3,pieceGrams:118},
 "Bolillo integral":{kcal:250,protein:9,carbs:48,fat:3.5,pieceGrams:75},
 "Frijoles cocidos":{kcal:132,protein:8.9,carbs:23.7,fat:0.5},
 "Queso panela":{kcal:230,protein:19,carbs:3,fat:16},
 "Espinaca":{kcal:23,protein:2.9,carbs:3.6,fat:0.4},
 "Pechuga de pollo":{kcal:120,protein:22.5,carbs:0,fat:2.6},
 "Tomatillo":{kcal:32,protein:1,carbs:5.8,fat:1},
 "Pan integral":{kcal:247,protein:13,carbs:41,fat:4.2,pieceGrams:30},
 "Aguacate":{kcal:160,protein:2,carbs:8.5,fat:14.7},
 "Queso fresco":{kcal:264,protein:18,carbs:4,fat:20},
 "Arroz":{kcal:365,protein:7.1,carbs:80,fat:0.7},
 "Brócoli":{kcal:34,protein:2.8,carbs:6.6,fat:0.4},
 "Carne molida de res":{kcal:176,protein:20,carbs:0,fat:10},
 "Papa":{kcal:77,protein:2,carbs:17,fat:0.1},
 "Zanahoria":{kcal:41,protein:0.9,carbs:9.6,fat:0.2},
 "Bistec de res":{kcal:155,protein:22,carbs:0,fat:7},
 "Nopal":{kcal:16,protein:1.3,carbs:3.3,fat:0.1},
 "Tostada horneada":{kcal:420,protein:8,carbs:76,fat:10,pieceGrams:13},
 "Filete de pescado":{kcal:90,protein:19,carbs:0,fat:1.3},
 "Calabacita":{kcal:17,protein:1.2,carbs:3.1,fat:0.3},
 "Limón":{kcal:29,protein:1.1,carbs:9.3,fat:0.3,pieceGrams:58},
 "Pimiento":{kcal:31,protein:1,carbs:6,fat:0.3},
 "Lentejas":{kcal:353,protein:25,carbs:63,fat:1.1},
 "Pasta":{kcal:371,protein:13,carbs:75,fat:1.5},
 "Atún en agua":{kcal:116,protein:25.5,carbs:0,fat:0.8,pieceGrams:130},
 "Queso Oaxaca":{kcal:356,protein:23,carbs:2,fat:28},
 "Champiñones":{kcal:22,protein:3.1,carbs:3.3,fat:0.3},
 "Garbanzos":{kcal:364,protein:19.3,carbs:60.7,fat:6},
 "Pepino":{kcal:15,protein:0.7,carbs:3.6,fat:0.1},
 "Tortilla de harina integral":{kcal:310,protein:9,carbs:50,fat:8,pieceGrams:50},
 "Pechuga de pavo":{kcal:110,protein:23,carbs:1,fat:1.5},
 "Fresas":{kcal:32,protein:0.7,carbs:7.7,fat:0.3},
 "Manzana":{kcal:52,protein:0.3,carbs:13.8,fat:0.2,pieceGrams:182},
 "Crema de cacahuate":{kcal:588,protein:25,carbs:20,fat:50},
 "Leche":{kcal:61,protein:3.2,carbs:4.8,fat:3.3},
 "Requesón":{kcal:98,protein:11,carbs:3.4,fat:4.3},
 "Papaya":{kcal:43,protein:0.5,carbs:10.8,fat:0.3},
};
const round=(n:number)=>Math.round(n*10)/10;
export function ingredientGrams(i:Ingredient):number|null{
 const food=foodComposition[i.name];if(!food||!Number.isFinite(i.quantity)||i.quantity<0)return null;
 if(i.unit==='g'||i.unit==='ml')return i.quantity;
 if(['pza','lata','rebanada'].includes(i.unit)&&food.pieceGrams)return i.quantity*food.pieceGrams;
 return null;
}
export function computeNutrition(ingredients:Ingredient[]):{totals:NutrientTotals|null;missing:string[];assumptions:string[]}{
 const missing:string[]=[];const assumptions:string[]=[];
 const sum:NutrientTotals={kcal:0,protein:0,carbs:0,fat:0};
 for(const i of ingredients){
  const food=foodComposition[i.name],grams=ingredientGrams(i);
  if(!food||grams===null){missing.push(i.name+' ('+i.unit+')');continue}
  const factor=grams/100;
  sum.kcal+=food.kcal*factor;sum.protein+=food.protein*factor;sum.carbs+=food.carbs*factor;sum.fat+=food.fat*factor;
  if(i.unit!=='g'&&i.unit!=='ml')assumptions.push(i.name+': '+food.pieceGrams+' g por '+i.unit);
 }
 return {totals:missing.length?null:{kcal:Math.round(sum.kcal),protein:round(sum.protein),carbs:round(sum.carbs),fat:round(sum.fat)},missing,assumptions};
}
export function withCalculatedNutrition<T extends Recipe>(recipe:T):T&{carbs?:number;fat?:number;nutritionMethod:'ingredient_estimate'|'unavailable'}{
 const result=computeNutrition(recipe.ingredients);
 if(!result.totals)return {...recipe,nutritionMethod:'unavailable'};
 return {...recipe,...result.totals,nutritionMethod:'ingredient_estimate'};
}
