import {NextRequest,NextResponse} from 'next/server';
export const dynamic='force-dynamic';
export async function GET(req:NextRequest){
 const q=(req.nextUrl.searchParams.get('q')||'').trim().slice(0,80);
 const area=(req.nextUrl.searchParams.get('area')||'').trim().slice(0,40);
 const category=(req.nextUrl.searchParams.get('category')||'').trim().slice(0,40);
 let path=q?'search.php?s='+encodeURIComponent(q):area?'filter.php?a='+encodeURIComponent(area):category?'filter.php?c='+encodeURIComponent(category):'search.php?f=a';
 try{
 const res=await fetch('https://www.themealdb.com/api/json/v1/1/'+path,{next:{revalidate:3600}});
 if(!res.ok)throw Error('provider '+res.status);
 let raw=await res.json(),meals=raw.meals||[];
 if((area||category)&&!q){const results=await Promise.all(meals.slice(0,24).map(async(m:any)=>{const r=await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+encodeURIComponent(m.idMeal),{next:{revalidate:3600}});const d=await r.json();return d.meals?.[0]}));meals=results.filter(Boolean)}
 const recipes=meals.map((m:any)=>({id:m.idMeal,name:m.strMeal,image:m.strMealThumb,source:'TheMealDB',url:m.strSource||'https://www.themealdb.com/meal/'+m.idMeal,cuisine:m.strArea,category:m.strCategory,instructions:m.strInstructions,ingredients:Array.from({length:20},(_,i)=>({name:m['strIngredient'+(i+1)]?.trim(),amount:m['strMeasure'+(i+1)]?.trim()})).filter(x=>x.name),macros:null}));
 return NextResponse.json({recipes,attribution:'TheMealDB',note:'Recetas e imágenes de TheMealDB. Macros pendientes de análisis nutricional validado.'});
 }catch{return NextResponse.json({recipes:[],error:'No se pudo consultar TheMealDB'},{status:502})}
}
