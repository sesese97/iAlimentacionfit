# MealFit MX — Catálogo editorial y adaptación al mercado mexicano

Actualizado: 22 de octubre de 2026 · America/Mexico_City.

Índice de referencias y candidatas para construir un banco final de **1,200 recetas**. Una referencia web no implica receta propia, licencia, nutrición normalizada o supermercado integrado.

## Consultar antes de investigar otro lote

1. [Referencias heredadas](lib/reviewed-recipes.ts): 54 registros etiquetados por el proyecto como `referencia_verificada`.
2. [Candidatas heredadas](data/recipe-candidates-200.json): 200 candidatas de TheMealDB, sin macros y pendientes de auditoría individual.
3. [Lote 002 — JSON](data/recipe-research/batch-002-2026-10-22.json): 50 referencias, IDs `web-055`–`web-104`, de 24 fuentes.
4. [Lote 002 — informe](docs/recipe-research/batch-002-2026-10-22.md).
5. [Lote 003 — JSON](data/recipe-research/batch-003-2026-10-22.json): 50 referencias, IDs `web-105`–`web-154`, de 24 fuentes.
6. [Lote 003 — informe y pendientes](docs/recipe-research/batch-003-2026-10-22.md).
7. [Lote 004 — JSON](data/recipe-research/batch-004-2026-10-22.json): 50 referencias nuevas, IDs `web-155`–`web-204`, de 20 fuentes.
8. [Lote 004 — informe editorial y pendientes](docs/recipe-research/batch-004-2026-10-22.md).

## Distribución editorial

| Grupo editorial | Objetivo | Referencias heredadas | Candidatas heredadas | Lote 002 | Lote 003 | Lote 004 | Nuevas acumuladas |
|---|---:|---:|---:|---:|---:|---:|---:|
| Mexicana y latinoamericana | 220 | 10 | 3 | 9 | 9 | 9 | 27 |
| Italiana, mediterránea y española | 210 | 8 | 56 | 8 | 8 | 8 | 24 |
| Americana y comfort food saludable | 160 | 3 | 40 | 7 | 7 | 7 | 21 |
| India, china, japonesa y tailandesa | 210 | 12 | 35 | 9 | 9 | 9 | 27 |
| Mariscos y pescados | 130 | 4 | 22 | 5 | 5 | 5 | 15 |
| Vegetariana y vegana | 130 | 7 | 22 | 6 | 6 | 6 | 18 |
| Desayunos, snacks y postres | 140 | 10 | 22 | 6 | 6 | 6 | 18 |
| **Total** | **1,200** | **54** | **200** | **50** | **50** | **50** | **150** |

Hay 404 registros documentales en estos archivos, con distintos grados de revisión. **No equivalen a 404 recetas finales únicas aprobadas**: el legado contiene posibles duplicados y las candidatas no se han normalizado.

## Estado por lote

| Lote | Nuevas | Cuatro valores publicados | Base nutricional por aclarar | Alta proteína | Aprobadas para integración |
|---|---:|---:|---:|---:|---:|
| 002 | 50 | 45 | 6 | 16 | 0 |
| 003 | 50 | 50 | 6 | 26 | 0 |
| 004 | 50 | 48 | 8 (alertas prioritarias) | 21 | 0 |
| **Acumulado investigado** | **150** | **143** | **20** | **63** | **0** |

### Pendientes prioritarios del lote 003

- Alcance de macros, variante o porción: `web-107`, `web-108`, `web-118`, `web-126`, `web-143`, `web-148`.
- Tiempos o metadatos: `web-106`, `web-110`, `web-111`, `web-112`, `web-121`, `web-130`.
- Las 50 recetas siguen pendientes de normalización, prueba culinaria, recálculo local y derechos de uso.
- No se incorporan instrucciones completas ni fotografías de terceros.

### Pendientes prioritarios del lote 004

- Macronutrientes no publicados: `web-163` (carbohidratos) y `web-166` (grasa total).
- Alcance de la tabla/porción y posibles discrepancias: `web-169`, `web-175`, `web-180`, `web-184`, `web-186`, `web-194`, `web-204`.
- Faltan metadatos de preparación o rendimiento para 34 referencias; **las 50** requieren pruebas culinarias, normalización nutricional con insumos mexicanos y derechos de uso antes de aprobarse.

## Reglas para ampliar el banco

- Consultar este índice, el legado y todos los archivos de `data/recipe-research/`.
- Investigar lotes de 50–100 con búsquedas reales y varias fuentes; abrir la página original.
- Comparar URL canónica, nombres en ambos idiomas y concepto culinario. No contar variantes mínimas o enlaces alternativos como recetas nuevas.
- Asignar un grupo editorial por receta. Cocina y etiquetas son independientes.
- Mantener desconocidos en `null` y distinguir valores publicados de cálculos propios.
- Mantener `status` y `readyForPlanner` separados. Estados: candidata, revisada, aprobada y descartada.
- Añadir archivos nuevos sin regenerar ni sobrescribir lotes anteriores.
- Próximo ID disponible al cerrar este lote: `web-205`; verificar antes si otro lote ya lo usa.

## Mercado mexicano

Las sustituciones son hipótesis editoriales sin prueba, precio ni equivalencia nutricional confirmados. Antes del planificador se necesita una receta propia o autorizada, cocinada y pesada, con nutrición recalculada y fotografías propias o licenciadas.

## Alcance

Este índice documenta investigación y evita duplicados. No añade funciones de aplicación ni conexiones con supermercados.
