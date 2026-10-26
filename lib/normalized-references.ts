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
 'web-002':{
  sourceUrl:'https://www.skinnytaste.com/breakfast-pizza/',yieldServings:4,quantityStatus:'source_converted',
  ingredients:[
   {name:'Harina de trigo',quantity:35.44,unit:'g'},
   {name:'Polvo para hornear',quantity:1.5,unit:'g'},
   {name:'Sal',quantity:.75,unit:'g'},
   {name:'Yogur griego natural sin grasa',quantity:61.25,unit:'g'},
   {name:'Espinaca baby',quantity:7.5,unit:'g'},
   {name:'Queso mozzarella rallado',quantity:14.18,unit:'g'},
   {name:'Jitomate cherry',quantity:2,unit:'pza'},
   {name:'Huevo',quantity:1,unit:'pza'},
   {name:'Tocino cocido',quantity:.5,unit:'tira'}
  ],
  conversionNotes:[
   'La fuente original indica 4 pizzas, una por porción. Los macros publicados corresponden a una pizza completa.',
   'Harina: 5 oz (141.75 g) por receta, 35.44 g por pizza; yogur: 1 taza estimada en 245 g, 61.25 g por pizza.',
   'Mozzarella: 2 oz (56.7 g) por receta, 14.18 g por pizza; jitomate: 8 unidades para 4 pizzas.',
   'Espinaca: la fuente dice un puñado sin peso; se usa una estimación provisional de 30 g por receta. Verificar antes de declarar compra exacta.',
   'Tocino: 2 tiras cocidas por receta, media tira por pizza. Peso y marca pendientes; la lista de compra conserva la unidad original.',
   'Polvo para hornear y sal convertidos de cucharaditas con densidades aproximadas. No sustituir yogur sin grasa ni queso sin recalcular.'
  ],
  preparation:[
   'Precalienta el horno a 230 °C y prepara una charola antiadherente.',
   'Mezcla harina, polvo para hornear y sal; integra el yogur griego hasta obtener una masa y amásala brevemente.',
   'Divide en cuatro partes y extiende cada una en un óvalo delgado de aproximadamente 18 a 20 cm.',
   'Distribuye espinaca, mozzarella y jitomates dejando espacio en el centro para un huevo por pizza; reparte el tocino cocido.',
   'Hornea aproximadamente 10 a 12 minutos, hasta que la base se dore y el huevo alcance la cocción deseada; para personas vulnerables, cocina el huevo completamente.'
  ]
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
 },

 'web-042':{
  sourceUrl:'https://www.skinnytaste.com/cod-fish-tacos/',yieldServings:4,quantityStatus:'source_converted',
  ingredients:[
   {name:'Filete de pescado blanco sin piel',quantity:113.4,unit:'g'},
   {name:'Comino molido',quantity:.25,unit:'g'},
   {name:'Sal',quantity:1,unit:'g'},
   {name:'Chile con limón tipo Tajín',quantity:.45,unit:'g'},
   {name:'Yogur griego natural sin grasa',quantity:15,unit:'g'},
   {name:'Mayonesa ligera',quantity:11.25,unit:'g'},
   {name:'Jugo de limón',quantity:7.5,unit:'ml'},
   {name:'Chile con limón tipo Tajín',quantity:.45,unit:'g'},
   {name:'Cilantro',quantity:4,unit:'g'},
   {name:'Col blanca',quantity:17.5,unit:'g'},
   {name:'Col morada',quantity:17.5,unit:'g'},
   {name:'Zanahoria',quantity:7.5,unit:'g'},
   {name:'Aceite de oliva',quantity:3.4,unit:'g'},
   {name:'Jugo de limón',quantity:3.75,unit:'ml'},
   {name:'Tortilla de maíz',quantity:2,unit:'pza'},
   {name:'Limón',quantity:.25,unit:'pza'}
  ],
  conversionNotes:['La receta original rinde 4 porciones de 2 tacos; pescado 4 oz (113.4 g) por porción.','Tazas de col, yogur, cilantro y cucharadas de mayonesa/aceite convertidas a pesos estimados.','El limón para servir se estima como 1/4 pieza por porción; ajustar al gusto.','El agua para diluir la salsa no se agrega al súper.','Las dos apariciones de Tajín y de jugo de limón se consolidan en la lista de compras.'],
  preparation:['Sazona el pescado con comino y condimento de chile y limón.','Mezcla yogur, mayonesa ligera y limón para obtener una salsa fluida.','Combina coles, zanahoria, cilantro, aceite y limón como ensalada fresca.','Cocina el pescado en sartén hasta que alcance una temperatura interna segura de 63 °C; desmenúzalo.','Calienta las tortillas y arma dos tacos con pescado, ensalada y salsa.']
 },
 'web-047':{
  sourceUrl:'https://www.skinnytaste.com/spanish-tortilla-with-pimenton-aioli/',yieldServings:6,quantityStatus:'source_converted',
  ingredients:[
   {name:'Papa Yukon Gold',quantity:113.4,unit:'g'},
   {name:'Sal',quantity:1.5,unit:'g'},
   {name:'Caldo de pollo o verduras bajo en sodio',quantity:17.5,unit:'ml'},
   {name:'Cebolla amarilla',quantity:12.5,unit:'g'},
   {name:'Huevo',quantity:1,unit:'pza'},
   {name:'Pimienta negra molida',quantity:.08,unit:'g'},
   {name:'Aceite de oliva extra virgen',quantity:4.5,unit:'g'},
   {name:'Ajo',quantity:.5,unit:'g'},
   {name:'Mayonesa',quantity:7.5,unit:'g'},
   {name:'Jugo de limón',quantity:1.67,unit:'ml'},
   {name:'Pimentón ahumado',quantity:.1,unit:'g'}
  ],
  conversionNotes:['1.5 lb de papa para 6 porciones equivalen a 113.4 g por porción.','Caldo de 6–8 cucharadas para la receta completa: se estiman 17.5 ml por porción; puede variar.','Media cebolla grande equivale aproximadamente a 75 g totales; ajo pequeño, 3 g.','Aceite 2 cucharadas en total, aproximadamente 27 g para 6 porciones; mayonesa 3 cucharadas, unos 45 g.','Los macros publicados incluyen 1/6 de tortilla y su alioli; no incluyen pan o ensalada de acompañamiento.'],
  preparation:['Hierve las papas cortadas en láminas hasta que estén suaves sin deshacerse.','Ablanda la cebolla en una sartén con un poco de caldo, dejando que el líquido se reduzca.','Bate los huevos e integra las papas y la cebolla cocidas.','Cocina la mezcla en una sartén antiadherente con aceite, voltéala con cuidado y termina la cocción.','Mezcla mayonesa, ajo, limón y pimentón para una salsa de acompañamiento; divide la tortilla en seis porciones.']
 },
};
