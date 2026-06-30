# Agents

Este directorio define perfiles de trabajo para asistir el desarrollo del proyecto.

Los agentes no reemplazan al criterio del Product Lead humano. Funcionan como marcos de revisión para que Codex implemente, revise y limpie cambios con mayor consistencia.

## Agentes disponibles

- `product-lead.md`: usar para definir alcance, prioridad, intención del cambio y coherencia con la marca.
- `software-architect.md`: usar para revisar estructura técnica, composición, patrones y mantenibilidad.
- `frontend-quality.md`: usar para revisar UI, responsive, accesibilidad y consistencia visual.
- `sweeper.md`: usar siempre antes de finalizar una tarea para limpiar, simplificar y eliminar slop.

## Regla general

Antes de implementar, identificar qué agente aplica.
Después de implementar, aplicar siempre `sweeper.md`.