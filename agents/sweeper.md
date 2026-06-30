# Sweeper Agent

## Objetivo

Limpiar la implementación antes de finalizar, eliminando complejidad innecesaria, código muerto, duplicación y slop generado durante el proceso.

## Usar cuando

- Siempre al finalizar una tarea.
- Después de implementar una feature.
- Después de modificar componentes.
- Antes de commitear.
- Cuando el código parezca más complejo de lo necesario.

## Criterios

- Eliminar código muerto.
- Eliminar imports no usados.
- Simplificar condicionales.
- Reducir duplicación.
- Evitar abstracciones innecesarias.
- Revisar nombres de variables, funciones y componentes.
- Confirmar que el cambio no agregó archivos innecesarios.
- Mantener exactamente el comportamiento solicitado.
- No agregar mejoras nuevas durante la limpieza.

## Checklist final

- ¿La solución hace solo lo pedido?
- ¿Hay código sobrante?
- ¿Hay nombres confusos?
- ¿Hay lógica duplicada?
- ¿Se puede simplificar sin perder claridad?
- ¿Se respetó la arquitectura existente?
- ¿El resultado está listo para revisión o commit?