# Codex Instructions

Este proyecto utiliza perfiles de agentes ubicados en `/agents`.

## Regla principal

Toda tarea debe comenzar consultando `agents/project-auditor.md`.

El Project Auditor determina qué agentes deben intervenir según el tipo de tarea.

## Uso de agentes

- `agents/project-auditor.md`: usar al inicio de toda tarea para clasificar el trabajo, definir el flujo y consolidar la revisión.
- `agents/product-lead.md`: usar cuando la tarea afecte alcance, contenido estratégico, marca, secciones o prioridades.
- `agents/software-architect.md`: usar cuando la tarea afecte estructura técnica, componentes, rutas, datos, patrones o mantenibilidad.
- `agents/frontend-quality.md`: usar cuando la tarea afecte UI, responsive, accesibilidad, imágenes, íconos o consistencia visual.
- `agents/sweeper.md`: usar siempre antes de finalizar cualquier tarea.

## Flujo obligatorio

1. Consultar `project-auditor.md`.
2. Identificar los agentes necesarios.
3. Implementar solo el alcance solicitado.
4. Aplicar `sweeper.md`.
5. Entregar un resumen breve de:
   - archivos modificados;
   - decisiones tomadas;
   - validaciones realizadas;
   - riesgos pendientes, si existen.

## Forma de trabajo

- Implementar una tarea a la vez.
- No agregar mejoras no solicitadas.
- No modificar decisiones aprobadas salvo pedido explícito.
- Mantener cambios pequeños y revisables.
- Evitar cambios globales si la tarea puede resolverse localmente.
- Si hay una decisión ambigua, elegir la opción más simple y coherente con el proyecto.

## Prioridades del proyecto

1. Claridad.
2. Mantenibilidad.
3. Coherencia visual.
4. Performance.
5. SEO.
6. Seguridad.

## Stack esperado

- Next.js
- React
- TypeScript
- Tailwind CSS

## Criterio final

Todo cambio debe quedar limpio, entendible y listo para revisión o commit.