import type {Ingredient} from './data';
/**
 * Cantidades POR PORCIÓN, convertidas manualmente de fichas originales.
 * Conversiones de tazas, cebolla, tomates y quesos son APROXIMADAS.
 * No son cantidades certificadas; revisar etiquetas y rendimiento real.
 * Se mantienen los macros PUBLICADOS por el autor, sin mezclarlos con
 * una recomputación de ingredientes que podría tener diferente alcance.
 */
export type NormalizedReference={ingredients:Ingredient[];yieldServings:number;sourceUrl:string;quantityStatus:'source_converted';preparation:string[];conversionNotes:string[]};
export const normalizedReferences:Record<string,NormalizedReference>={
 'web-001':{
  sourceUrl:'https://www.skinnytaste.com/chicken-crust-pizza/',yieldServings:4,quantityStatus:'source_converted',
  ingredients:[
   {name:'Pollo molido 93% magro',quantity:113.4,unit:'g'},
   {name:'Queso parmesano rallado',quantity:12.5,unit:'g'},
   {name:'Huevo',quantity:.25,unit:'pza'},
   {name:'Ajo en polvo',quantity:.75,unit:'g'},
   {name:'Cebolla en polvo',quantity:.6,unit:'g'},
   {name:'Hierbas italianas secas',quantity:.125,unit:'g'},
   {name:'Salsa para pizza',quantity:31,unit:'g'},
   {name:'Queso mozzarella bajo en grasa',quantity:21,unit:'g'},
   {name:'Pimiento',quantity:19,unit:'g'},
   {name:'Brócoli',quantity:11,unit:'g'},
   {name:'Cebolla morada',quantity:10,unit:'g'},
   {name:'Sal',quantity:1.5,unit:'g'}
  ],
  conversionNotes:['1 lb de pollo equivale a aproximadamente 454 g para 4 porciones.','Tazas de queso, salsa y vegetales convertidas a gramos aproximados; revisar marca y presentación.'],
  preparation:['Precalienta el horno a 220 °C y prepara una charola con papel para hornear.','Mezcla pollo molido, huevo, parmesano y condimentos; forma una base delgada por porción.','Hornea la base hasta que el pollo esté completamente cocido; añade salsa, queso y verduras.','Regresa al horno hasta fundir el queso y terminar las verduras.']
 },
 'web-005':{
  sourceUrl:'https://www.skinnytaste.com/shrimp-quesadilla/',yieldServings:4,quantityStatus:'source_converted',
  ingredients:[
   {name:'Camarón crudo pelado',quantity:85,unit:'g'},
   {name:'Tortilla de harina alta en fibra',quantity:1,unit:'pza'},
   {name:'Queso Monterey Jack',quantity:28,unit:'g'},
   {name:'Cebolla morada',quantity:20,unit:'g'},
   {name:'Ajo',quantity:1.5,unit:'g'},
   {name:'Chile jalapeño',quantity:4,unit:'g'},
   {name:'Jitomate',quantity:60,unit:'g'},
   {name:'Aceite de oliva',quantity:1.1,unit:'g'},
   {name:'Cilantro',quantity:3,unit:'g'},
   {name:'Aguacate',quantity:28,unit:'g'},
   {name:'Limón',quantity:.25,unit:'pza'},
   {name:'Sal',quantity:1,unit:'g'}
  ],
  conversionNotes:['12 oz de camarón son unos 340 g divididos en 4.','La tortilla alta en fibra específica afecta macros; no sustituir por una convencional sin recalcular.','Jitomate, aguacate y hierbas convertidos de unidades y cucharadas a pesos aproximados.'],
  preparation:['Mezcla jitomate, aguacate, cebolla, limón y cilantro para preparar una salsa fresca.','Saltea las verduras y el camarón hasta que este cambie de color y se cocine por completo.','Reparte el relleno y el queso en las tortillas, dora por ambos lados y sirve con la salsa.']
 },
 'web-055':{
  sourceUrl:'https://www.mexicoinmykitchen.com/chicken-tinga-recipe/',yieldServings:6,quantityStatus:'source_converted',
  ingredients:[
   {name:'Pollo cocido deshebrado',quantity:70,unit:'g'},
   {name:'Jitomate',quantity:90,unit:'g'},
   {name:'Cebolla blanca',quantity:25,unit:'g'},
   {name:'Ajo',quantity:1,unit:'g'},
   {name:'Chile chipotle en adobo',quantity:5,unit:'g'},
   {name:'Perejil',quantity:1.5,unit:'g'},
   {name:'Aceite vegetal',quantity:4.5,unit:'g'},
   {name:'Sal',quantity:.5,unit:'g'},
   {name:'Pimienta negra',quantity:.1,unit:'g'}
  ],
  conversionNotes:['3 tazas de pollo cocido se estiman en 420 g para 6 porciones; el peso puede variar por deshebrado.','3 tazas de jitomate se aproximan a 540 g; cebolla y chipotle se convierten a gramos aproximados.','La porción de la fuente es 4 oz de tinga, no incluye tostadas ni guarniciones.'],
  preparation:['Sofríe cebolla y ajo con el aceite hasta suavizar.','Incorpora jitomate y perejil; cocina hasta que el jitomate suelte sus jugos.','Agrega pollo deshebrado y chipotle; cocina a fuego bajo hasta integrar los sabores.','Sirve como guiso; tortillas y acompañamientos deben registrarse por separado.']
 }
};
