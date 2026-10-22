import {NextRequest,NextResponse} from 'next/server';
export const dynamic='force-dynamic';
const cuisines=['american','asian','british','caribbean','central europe','chinese','eastern europe','french','greek','indian','italian','japanese','korean','mediterranean','mexican','middle eastern','nordic','south american','south east asian'];
const diets=['balanced','high-protein','high-fiber','low-carb','low-fat','low-sodium'];
const health=['vegetarian','vegan','gluten-free','dairy-free','egg-free','fish-free','shellfish-free','peanut-free','tree-nut-free','wheat-free'];
export async function GET(req:NextRequest){
 const id=process.env.EDAMAM_APP_ID,key=process.env.EDAMAM_APP_KEY;
 if(!id||!key)return NextResponse.json({configured:false,error:'La biblioteca con licencia requiere configurar EDAMAM_APP_ID y EDAMAM_APP_KEY en Vercel.',recipes:[]},{status:503});
 const p=req.nextUrl.searchParams,q=(p.get('q')||'').trim().slice(0,100);
 const cuisine=p.get('cuisine')||'',diet=p.get('diet')||'',restriction=p.get('health')||'';
 const url=new URL('https://api.edamam.com/api/recipes/v2');
 url.searchParams.set('type','public');url.searchParams.set('app_id',id);url.searchParams.set('app_key',key);
 url.searchParams.set('q',q||'chicken');url.searchParams.set('random','false');
 if(cuisines.includes(cuisine))url.searchParams.append('cuisineType',cuisine);
 if(diets.includes(diet))url.searchParams.append('diet',diet);
 if(health.includes(restriction))url.searchParams.append('health',restriction);
 if(p.get('next')){try{const cursor=new URL(p.get('next')!);if(cursor.origin==='https://api.edamam.com'&&cursor.pathname==='/api/recipes/v2'){url.search=cursor.search;url.searchParams.set('app_id',id);url.searchParams.set('app_key',key)}}catch{}}
 try{
  const res=await fetch(url,{cache:'no-store'});
  if(!res.ok)return NextResponse.json({configured:true,error:'El proveedor respondió con error '+res.status,recipes:[]},{status:502});
  const data=await res.json();
  return NextResponse.json({configured:true,recipes:(data.hits||[]).map((h:any)=>{const r=h.recipe||{};return {id:r.uri,name:r.label,image:r.image,source:r.source,url:r.url,servings:r.yield,calories:Math.round((r.calories||0)/(r.yield||1)),protein:Math.round((r.totalNutrients?.PROCNT?.quantity||0)/(r.yield||1)),carbs:Math.round((r.totalNutrients?.CHOCDF?.quantity||0)/(r.yield||1)),fat:Math.round((r.totalNutrients?.FAT?.quantity||0)/(r.yield||1)),ingredients:r.ingredientLines||[],cuisine:r.cuisineType||[],diet:r.dietLabels||[],health:r.healthLabels||[]}}),next:(()=>{const href=data._links?.next?.href;if(!href)return null;try{const u=new URL(href);if(u.origin!=='https://api.edamam.com')return null;u.searchParams.delete('app_id');u.searchParams.delete('app_key');return u.toString()}catch{return null}})(),attribution:'Edamam',note:'Recetas web: instrucciones y derechos pertenecen al sitio de origen. Mostrar enlace a fuente. No copiar ni almacenar masivamente.'});
 }catch{return NextResponse.json({configured:true,error:'No fue posible consultar el proveedor.',recipes:[]},{status:502})}
}
