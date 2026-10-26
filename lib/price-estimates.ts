import type {Ingredient} from './data';
/**
 * Estimador offline inicial para México. Estos valores NO son cotizaciones
 * comerciales ni precios de Google Shopping; son supuestos presupuestarios
 * editables en el código y requieren actualización con datos autorizados.
 * Precio aproximado por kg, litro o pieza según unidad.
 */
const perKg:Record<string,number>={
 'Aceite de oliva':240,'Aceite de oliva extra virgen':290,'Aceite vegetal':48,
 'Aguacate':95,'Ajo':150,'Ajo en polvo':520,'Arroz':38,'Atún en agua':175,
 'Avena':48,'Bistec de res':230,'Brócoli':65,'Calabacita':39,
 'Caldo de pollo o verduras bajo en sodio':35,'Camarón crudo pelado':270,
 'Carne molida de res':195,'Cebolla':35,'Cebolla amarilla':35,'Cebolla blanca':35,
 'Cebolla en polvo':450,'Cebolla morada':55,'Champiñones':110,
 'Chile chipotle en adobo':145,'Chile con limón tipo Tajín':270,'Chile jalapeño':65,
 'Cilantro':120,'Col blanca':28,'Col morada':45,'Comino molido':350,
 'Crema de cacahuate':160,'Espinaca':95,'Filete de pescado':175,
 'Filete de pescado blanco sin piel':175,'Fresas':110,'Frijoles cocidos':60,
 'Garbanzos':75,'Hierbas italianas secas':450,'Jitomate':43,
 'Jugo de limón':65,'Leche':29,'Lentejas':60,'Limón':58,'Manzana':52,
 'Mayonesa':110,'Mayonesa ligera':130,'Nopal':50,'Pan integral':105,
 'Papa':48,'Papa Yukon Gold':58,'Papaya':38,'Pasta':49,
 'Pechuga de pavo':210,'Pechuga de pollo':155,'Pepino':35,
 'Perejil':130,'Pimentón ahumado':520,'Pimienta negra':550,
 'Pimienta negra molida':550,'Pimiento':95,'Plátano':32,
 'Pollo cocido deshebrado':185,'Pollo molido 93% magro':180,
 'Queso Monterey Jack':260,'Queso Oaxaca':205,'Queso fresco':150,
 'Queso mozzarella bajo en grasa':225,'Queso panela':175,
 'Queso parmesano rallado':420,'Requesón':135,'Sal':25,
 'Salsa para pizza':85,'Tomatillo':55,'Tortilla de harina alta en fibra':180,
 'Tortilla de harina integral':115,'Tortilla de maíz':27,
 'Tostada horneada':135,'Yogur griego natural':145,
 'Yogur griego natural sin grasa':155,'Zanahoria':32
};
const perPiece:Record<string,number>={
 'Huevo':4.3,'Plátano':4.5,'Bolillo integral':9,'Limón':3.3,
 'Manzana':10,'Tortilla de maíz':1.2,'Tostada horneada':2.4,
 'Tortilla de harina alta en fibra':8,'Tortilla de harina integral':5.5,
 'Pan integral':3.6,'Atún en agua':26
};
export type PriceEstimate={cost:number;unitPrice:number;source:'offline_reference';lower:number;upper:number}|null;
export function estimateIngredientPrice(item:Ingredient):PriceEstimate{
 let cost:number|undefined,unitPrice:number|undefined;
 if(item.unit==='g'||item.unit==='ml'){
  const price=perKg[item.name];if(price!==undefined){unitPrice=price/1000;cost=item.quantity*unitPrice;}
 }else if(item.unit==='pza'||item.unit==='lata'||item.unit==='rebanada'){
  const price=perPiece[item.name];if(price!==undefined){unitPrice=price;cost=item.quantity*price;}
 }
 if(cost===undefined||unitPrice===undefined)return null;
 return {cost,unitPrice,source:'offline_reference',lower:cost*.7,upper:cost*1.3};
}
