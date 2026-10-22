#!/usr/bin/env python3
"""Discovery pass: 200 distinct source-backed candidates. NOT 200 nutritionally validated recipes.
Uses TheMealDB's developer/test API for research. No third-party recipe text is copied.
"""
import json, time, urllib.request, pathlib, collections, re, sys
BASE="https://www.themealdb.com/api/json/v1/1/"
GROUPS={
 "Mexicana y latinoamericana":37,
 "Italiana, mediterránea y española":35,
 "Americana y comfort food":27,
 "India, china, japonesa y tailandesa":35,
 "Mariscos y pescados":22,
 "Vegetariana y vegana":22,
 "Desayunos, snacks y postres":22,
}
AREAS=["Mexican","Spanish","Italian","Greek","French","American","Canadian","Indian","Chinese","Japanese","Thai","Vietnamese","Malaysian","Turkish","Moroccan","Portuguese","Brazilian","Argentinian","Peruvian","British","Jamaican","Korean","Tunisian","Egyptian","Russian","Filipino"]
CATEGORIES=["Seafood","Vegetarian","Vegan","Breakfast","Dessert","Pasta","Chicken","Beef","Starter","Side","Miscellaneous","Lamb","Pork","Goat"]
data={}
def fetch(endpoint):
    try:
        req=urllib.request.Request(BASE+endpoint,headers={"User-Agent":"MealFitMX-RecipeResearch/1.0 (catalogue candidate identification)"})
        with urllib.request.urlopen(req,timeout=22) as res: obj=json.load(res)
        return obj.get("meals") or []
    except Exception as e:
        print("WARN",endpoint,str(e),flush=True);return []
for area in AREAS:
    for item in fetch("filter.php?a="+area):
        id=item.get("idMeal")
        if id: data[id]={**data.get(id,{}),**item,"queriedArea":area}
    time.sleep(.8)
for category in CATEGORIES:
    for item in fetch("filter.php?c="+category):
        id=item.get("idMeal")
        if id:
            existing=data.get(id,{})
            data[id]={**existing,**item,"queriedCategory":category}
    time.sleep(.8)
print("Retrieved unique source IDs:",len(data),flush=True)
def group(x):
    a=(x.get("strArea") or x.get("queriedArea") or "").lower()
    c=(x.get("queriedCategory") or "").lower()
    n=(x.get("strMeal") or "").lower()
    if c=="seafood" or any(t in n for t in ["salmon","shrimp","prawn","cod","tuna","squid","fish","seafood","sardine","mussel","oyster","gambas"]):return "Mariscos y pescados"
    if c in ("vegetarian","vegan"):return "Vegetariana y vegana"
    if c in ("breakfast","dessert") or any(t in n for t in ["pancake","waffle","muffin","cookie","pudding","oatmeal"]):return "Desayunos, snacks y postres"
    if a in ("mexican","brazilian","argentinian","peruvian","jamaican","colombian","venezuelan","cuban"):return "Mexicana y latinoamericana"
    if a in ("italian","spanish","greek","french","portuguese","turkish","moroccan","tunisian"):return "Italiana, mediterránea y española"
    if a in ("indian","chinese","japanese","thai","vietnamese","malaysian","korean","filipino"):return "India, china, japonesa y tailandesa"
    if a in ("american","canadian","british"):return "Americana y comfort food"
    if c=="pasta":return "Italiana, mediterránea y española"
    return "Americana y comfort food"
avoid=re.compile(r"(fried|deep.fried|fritter|cake|ice cream|brownie|donut|doughnut|cheesecake|chocolate fudge)",re.I)
def rank(x):
    n=x.get("strMeal","")
    return (bool(avoid.search(n)),len(n)>75,n.lower())
pools=collections.defaultdict(list)
for x in data.values():
    if not x.get("strMeal") or not x.get("idMeal"):continue
    pools[group(x)].append(x)
for pool in pools.values():pool.sort(key=rank)
out=[];seen=set()
def add(x,g):
    if x["idMeal"] in seen:return
    seen.add(x["idMeal"])
    out.append({"id":"mdb-"+x["idMeal"],"sourceId":x["idMeal"],"name":x["strMeal"],"group":g,"originalArea":x.get("strArea") or x.get("queriedArea") or None,"originalCategory":x.get("queriedCategory") or None,"source":"TheMealDB","sourceUrl":"https://www.themealdb.com/meal/"+x["idMeal"],"imageUrl":x.get("strMealThumb"),"status":"candidata_sin_validar","calories":None,"protein":None,"carbs":None,"fat":None,"editorialNotes":"Revisar ingredientes, porción, perfil saludable y licencia antes de aprobar"})
for g,target in GROUPS.items():
    for x in pools[g][:target]:add(x,g)
if len(out)<200:
    for g in GROUPS:
        for x in pools[g]:
            if len(out)>=200:break
            add(x,g)
if len(out)<200:
    print("FAIL: only",len(out),"unique candidates found; no invented entries",file=sys.stderr)
    sys.exit(2)
out=out[:200]
path=pathlib.Path("data/recipe-candidates-200.json")
path.parent.mkdir(parents=True,exist_ok=True)
path.write_text(json.dumps({"batch":"Lote 001","date":"2026-10-22","method":"Búsqueda sistemática por región y categoría en fuente pública, selección heurística preliminar, sin auditoría individual","status":"200 candidatas identificadas, pendientes de curaduría manual, nutrición, licencia y adaptación","total":len(out),"distribution":dict(collections.Counter(x["group"] for x in out)),"recipes":out},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("Saved",len(out),dict(collections.Counter(x["group"] for x in out)),flush=True)
