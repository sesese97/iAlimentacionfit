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
9. [Lote 005 — JSON](data/recipe-research/batch-005-2026-10-22.json): 50 nuevas referencias, IDs `web-205`–`web-254`, de 19 fuentes.
10. [Lote 005 — informe y pendientes](docs/recipe-research/batch-005-2026-10-22.md).
11. [Lote 006 — JSON](data/recipe-research/batch-006-2026-10-22.json): 50 nuevas referencias, IDs `web-255`–`web-304`, 10 fuentes.
12. [Lote 006 — informe y pendientes](docs/recipe-research/batch-006-2026-10-22.md).
13. [Lote 007 — JSON y clasificación de comidas/preparación](data/recipe-research/batch-007-2026-10-26.json): 50 referencias, `web-305`–`web-354`, 13 fuentes.
14. [Lote 007 — auditoría de ingredientes, nutrición y cocinado anticipado](docs/recipe-research/batch-007-2026-10-26.md).

## Distribución editorial

| Grupo editorial | Objetivo | Referencias heredadas | Candidatas heredadas | Lote 002 | Lote 003 | Lote 004 | Lote 005 | Lote 006 | Lote 007 | Nuevas acumuladas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mexicana y latinoamericana | 220 | 10 | 3 | 9 | 9 | 9 | 10 | 9 | 9 | 55 |
| Italiana, mediterránea y española | 210 | 8 | 56 | 8 | 8 | 8 | 9 | 8 | 8 | 49 |
| Americana y comfort food saludable | 160 | 3 | 40 | 7 | 7 | 7 | 7 | 7 | 7 | 42 |
| India, china, japonesa y tailandesa | 210 | 12 | 35 | 9 | 9 | 9 | 9 | 9 | 9 | 54 |
| Mariscos y pescados | 130 | 4 | 22 | 5 | 5 | 5 | 5 | 5 | 5 | 30 |
| Vegetariana y vegana | 130 | 7 | 22 | 6 | 6 | 6 | 5 | 6 | 6 | 35 |
| Desayunos, snacks y postres | 140 | 10 | 22 | 6 | 6 | 6 | 5 | 6 | 6 | 35 |
| **Total** | **1,200** | **54** | **200** | **50** | **50** | **50** | **50** | **50** | **50** | **300** |

Hay 554 registros documentales en estos archivos, con distintos grados de revisión. **No equivalen a 554 recetas finales únicas aprobadas**: el legado contiene posibles duplicados y las candidatas no se han normalizado.

## Estado por lote

| Lote | Nuevas | Cuatro valores publicados | Base nutricional por aclarar | Alta proteína | Aprobadas para integración |
|---|---:|---:|---:|---:|---:|
| 002 | 50 | 45 | 6 | 16 | 0 |
| 003 | 50 | 50 | 6 | 26 | 0 |
| 004 | 50 | 48 | 8 (alertas prioritarias) | 21 | 0 |
| 005 | 50 | 50 | 13 (alertas prioritarias) | 16 | 0 |
| 006 | 50 | 50 | 15 (alertas prioritarias) | 16 | 0 |
| 007 | 50 | 50 | 2 (candidatas con alcance nutricional dudoso) | 20 | 0 |
| **Acumulado investigado** | **300** | **293** | **50** | **115** | **0** |

### Pendientes prioritarios del lote 003

- Alcance de macros, variante o porción: `web-107`, `web-108`, `web-118`, `web-126`, `web-143`, `web-148`.
- Tiempos o metadatos: `web-106`, `web-110`, `web-111`, `web-112`, `web-121`, `web-130`.
- Las 50 recetas siguen pendientes de normalización, prueba culinaria, recálculo local y derechos de uso.
- No se incorporan instrucciones completas ni fotografías de terceros.

### Pendientes prioritarios del lote 004

- Macronutrientes no publicados: `web-163` (carbohidratos) y `web-166` (grasa total).
- Alcance de la tabla/porción y posibles discrepancias: `web-169`, `web-175`, `web-180`, `web-184`, `web-186`, `web-194`, `web-204`.
- Faltan metadatos de preparación o rendimiento para 34 referencias; **las 50** requieren pruebas culinarias, normalización nutricional con insumos mexicanos y derechos de uso antes de aprobarse.

### Pendientes prioritarios del lote 005

- **50 referencias** con los cuatro macros publicados, pero sin normalización o pruebas con productos del mercado mexicano.
- Alcance de porción, tiempo o metadatos nutricionales prioritarios: `web-205`, `web-206`, `web-207`, `web-210`, `web-212`, `web-219`, `web-226`, `web-232`, `web-240`, `web-244`, `web-250`, `web-252`, `web-254`.
- En 34 fichas hay al menos un tiempo de preparación o dato de rendimiento por confirmar.
- **0 aprobadas** para integración; las 50 necesitan cantidades en gramos, cálculo local, pruebas gastronómicas, y revisión de derechos de uso.

### Pendientes prioritarios del lote 006

- 50 referencias con cuatro macros publicados; todos requieren ajuste nutricional al mercado mexicano.
- Confirmar tamaño/alcance de porción en `web-257`, `web-261`, `web-264`, `web-269`, `web-272`, `web-273`, `web-281`, `web-283`, `web-287`, `web-289`, `web-294`, `web-296`, `web-298`, `web-302` y `web-304`.
- En 39 fichas queda por confirmar al menos un dato de preparación o rendimiento.
- 25/50 proceden de Skinnytaste: diversificar las fuentes en lotes siguientes.
- Ninguna referencia se aprobó para el planificador. La integración requiere versiones originales, pesos/merma, macros recalculados y derechos de uso.

### Pendientes prioritarios del lote 007

- `web-310` arepa hawaiana y `web-326` pot pie: cuatro valores publicados, pero posible inconsistencia entre ingredientes y macros. Estado `candidata`, no promover a `revisada` sin auditoría de porción.
- Las demás 48 fichas están `revisada` solo como referencia editorial; **ninguna** aprobada para planificador o supermercado.
- Nueva clasificación multietiqueta `mealSlots`: `desayuno`, `colación`, `comida` y `cena`.
- Nueva evaluación `batchPrep` para 2 o 3 días, con separación de componentes, arroz preparado fresco/congelado, recetas congelables y perecederos que se montan al servir. Las recomendaciones de almacenamiento no equivalen a validación de inocuidad de la receta mexicana.
- Las 50 referencias tienen ingredientes principales identificados pero cantidades, pesos crudo/cocido, SKU y equivalencias **pendientes** (`null`); no enviarlos al supermercado ni interpretar desconocido como cero.
- Verificar en prioridad quesos con cuajo, proteína vegetal en polvo, tofu/soya, frutos secos, trigo, pescado y mariscos; no certificar ausencia de alérgenos ni de gluten.

## Reglas para ampliar el banco

- Consultar este índice, el legado y todos los archivos de `data/recipe-research/`.
- Investigar lotes de 50–100 con búsquedas reales y varias fuentes; abrir la página original.
- Comparar URL canónica, nombres en ambos idiomas y concepto culinario. No contar variantes mínimas o enlaces alternativos como recetas nuevas.
- Asignar un grupo editorial por receta. Cocina y etiquetas son independientes.
- Mantener desconocidos en `null` y distinguir valores publicados de cálculos propios.
- Mantener `status` y `readyForPlanner` separados. Estados: candidata, revisada, aprobada y descartada.
- Añadir archivos nuevos sin regenerar ni sobrescribir lotes anteriores.
- Próximo ID disponible al cerrar este lote: `web-355`; verificar antes si otro lote ya lo usa.

## Mercado mexicano

Las sustituciones son hipótesis editoriales sin prueba, precio ni equivalencia nutricional confirmados. Antes del planificador se necesita una receta propia o autorizada, cocinada y pesada, con nutrición recalculada y fotografías propias o licenciadas.

## Alcance

Este índice documenta investigación y evita duplicados. No añade funciones de aplicación ni conexiones con supermercados.
