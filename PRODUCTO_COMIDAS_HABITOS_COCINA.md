# MealFit MX · Especificación funcional: comidas, hábitos y equipo de cocina

## 1. Número de comidas configurable
- Perfil: elegir entero 3, 4, 5 o 6; default 4; persistencia.
- El objetivo diario de kcal y P/C/G no cambia al cambiar frecuencia; cambia distribución por horarios y tipos de comida.
- Modelar MealSlot[] dinámicos: desayuno, comida, cena y hasta tres colaciones o tiempos intermedios, personalizables.
- Generación: sustituir bucles rígidos de cuatro recetas en lib/planner.ts por algoritmo para N slots (beam search/DP), con porciones escalables, ingredientes y cuatro macros calculados. No reutilizar valores ilustrativos como verificados.
- Lista de compras: sumar cantidades reales según porciones, comensales, días y recetas efectivamente elegidas.
- Cambiar de 4 a 6 no puede dejar un plan anterior de 28 recetas visible como si correspondiera a 42.
- Tests: 3/4/5/6 comidas × 7 días, restricciones, preferencias, cero slots vacíos, regeneración y recálculo de lista.
- Mientras no existan suficientes recetas verificadas, mostrar aviso y evitar generar cifras inventadas.

## 2. Agenda y control diario
- Recordatorios independientes: compra semanal, preparación (meal prep), desayuno/comida/cena/colaciones.
- Horarios configurables, zona horaria, días, silencio, permisos explícitos.
- Registro de consumo: pendiente / comí lo planeado / sustituí / omití; porciones consumidas, fecha/hora.
- Resumen de kcal y macros realmente consumidos vs objetivos; nunca contar automáticamente comida planeada como comida ingerida.
- Persistencia en cuenta sincronizada (backend), no depender exclusivamente de localStorage.
- Notificaciones iOS/iPadOS: investigar PWA instalada + Web Push, permisos y requisitos Safari, service worker, suscripciones y push backend; fallback calendario ICS, sin prometer alarmas con app cerrada sin infraestructura.
- Respetar opt-in, horario de descanso, posibilidad de desactivar recordatorios. Evitar mensajes culpabilizantes.

## 3. Inventario de aparatos y métodos
- Onboarding 'Mi cocina' con tarjetas: estufa, horno, microondas, freidora de aire, licuadora, procesador, olla exprés, olla lenta, arrocera, vaporera, parrilla/asador, sartén, tostador, batidora.
- Equipos guardados en perfil; permitir modificar después.
- RecipeMethod[] por receta: equipos requeridos, equipos alternativos, temperatura, tiempo, preparación, rendimiento, aceite añadido y ajustes de ingredientes.
- Filtrar recetas inviables, o proponer sustitución comprobada de método; no asumir que cualquier receta de horno funciona en air fryer sin adaptación.
- Cambios de método que alteren aceite, rebozados o porciones obligan a recalcular nutrición y lista de compra.
- Accesibilidad: lista además del mapa visual de cocina; iconos no son la única señal.

## Dependencias
- Los módulos de 3-6 comidas, tracking y equipamiento requieren cambios de Profile, persistencia, UI y planner. No se consideran implementados por este documento.
- Datos nutricionales por receta deben estar validados antes de evaluar objetivos.
- No lanzar recordatorios falsos que solo funcionen con la página abierta.

## Prioridad
1. Modelo de datos + 3-6 comidas y planner dinámico.
2. Registro de consumo y resumen diario.
3. Inventario de cocina y recetas multimétodo.
4. Recordatorios reales con infraestructura push y calendario.
