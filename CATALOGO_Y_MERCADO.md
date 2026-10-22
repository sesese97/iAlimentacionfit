# MealFit MX — Catálogo editorial y adaptación al mercado mexicano

Actualizado: 22 de octubre de 2026 · America/Mexico_City.

Índice de referencias y candidatas para construir un banco final de **1,200 recetas**. Una referencia web no implica receta propia, licencia, nutrición normalizada o supermercado integrado.

## Consultar antes de investigar otro lote

1. [Referencias heredadas](lib/reviewed-recipes.ts): 54 registros etiquetados por el proyecto como `referencia_verificada`.
2. [Candidatas heredadas](data/recipe-candidates-200.json): 200 candidatas de TheMealDB, sin macros y pendientes de auditoría individual.
3. [Lote 002 — JSON](data/recipe-research/batch-002-2026-10-22.json): 50 referencias nuevas, IDs `web-055`–`web-104`, de 24 fuentes.
4. [Lote 002 — informe y pendientes](docs/recipe-research/batch-002-2026-10-22.md).

Este archivo no existía en la rama principal al iniciar la auditoría. Se crea como índice para los siguientes lotes, preservando los dos archivos heredados.

## Distribución editorial

| Grupo editorial | Objetivo final | Referencias heredadas | Candidatas heredadas | Nuevas lote 002 |
|---|---:|---:|---:|---:|
| Mexicana y latinoamericana | 220 | 10 | 3 | 9 |
| Italiana, mediterránea y española | 210 | 8 | 56 | 8 |
| Americana y comfort food saludable | 160 | 3 | 40 | 7 |
| India, china, japonesa y tailandesa | 210 | 12 | 35 | 9 |
| Mariscos y pescados | 130 | 4 | 22 | 5 |
| Vegetariana y vegana | 130 | 7 | 22 | 6 |
| Desayunos, snacks y postres | 140 | 10 | 22 | 6 |
| **Total** | **1,200** | **54** | **200** | **50** |

Hay 304 registros documentales en estos archivos, con distintos grados de revisión. **No equivalen a 304 recetas finales únicas aprobadas**: el legado contiene posibles duplicados y no se ha normalizado para el planificador.

## Estado del lote 002

- 50 referencias revisadas documentalmente.
- 45 con calorías, proteína, carbohidratos y grasa publicados.
- 5 con nutrición incompleta o no verificable: `web-060`, `web-061`, `web-069`, `web-094`, `web-098`.
- 6 completas requieren aclaración prioritaria de porción o variante: `web-084`, `web-085`, `web-086`, `web-087`, `web-090`, `web-095`.
- 16 cumplen el criterio editorial interno de alta proteína descrito en el JSON.
- 0 aprobadas para integración automática. Las 50 conservan pendientes de normalización, prueba y uso de contenido.
- Sin instrucciones completas ni fotografías de terceros incorporadas.

## Reglas para ampliar el banco

- Consultar este índice, el legado y todos los archivos de `data/recipe-research/`.
- Investigar lotes de 50–100 con búsquedas reales y varias fuentes; abrir la página original.
- Comparar URL canónica, nombres en ambos idiomas y concepto culinario. No contar traducciones, páginas de comentarios, variantes mínimas o enlaces alternativos como recetas nuevas.
- Asignar un grupo editorial por receta. Cocina y etiquetas son independientes.
- Mantener desconocidos en `null` y distinguir valores publicados de futuros cálculos propios.
- Mantener `status` y `readyForPlanner` separados. Estados: candidata, revisada, aprobada y descartada.
- Añadir archivos nuevos sin regenerar ni sobrescribir lotes anteriores.
- Próximo ID disponible al cerrar este lote: `web-105`; verificar antes si otro lote ya lo usa.

## Mercado mexicano

Las sustituciones propuestas no certifican disponibilidad, precio ni equivalencia nutricional. Faltan productos concretos con marca, presentación, peso escurrido, merma, precio por unidad y compatibilidad con cada supermercado.

Antes del planificador se requiere una receta propia o autorizada, probada, con rendimiento pesado, nutrición recalculada y fotografías propias o licenciadas. Esta etapa no se ejecuta en el lote editorial.

## Alcance

Este índice documenta investigación y evita duplicados. No añade funciones de aplicación ni conexiones con supermercados.
