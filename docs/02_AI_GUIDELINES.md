# 02_AI_GUIDELINES.md

# Guía de trabajo para IA

**Versión:** 1.0
**Estado:** Activo

---

# Reglas frontend

- Mantener Server Components por defecto.
- Usar `"use client"` solo cuando sea necesario: estado, efectos, eventos del navegador o APIs del cliente.
- No convertir componentes a Client Components sin justificación.
- En Next.js 15/16, tratar `params`, `searchParams`, `cookies()`, `headers()` y `draftMode()` como APIs asíncronas cuando corresponda.
- No desactivar TypeScript ni ignorar errores de build.
- No agregar dependencias para resolver problemas simples.
- Priorizar componentes pequeños, legibles y reutilizables.
- Mantener contenido separado de la presentación cuando una sección empiece a crecer.
- Usar `next/image` para imágenes reales cuando sea posible.
- Revisar accesibilidad básica: labels, aria, contraste, foco visible y navegación por teclado.

# Objetivo

Este documento define cómo debe trabajar cualquier asistente de IA dentro del proyecto **Franco Brand**.

El objetivo no es únicamente escribir código.

El objetivo es ayudar a construir un producto consistente, profesional y mantenible respetando la identidad definida en `01_BRAND.md`.

Antes de realizar cualquier cambio, la IA debe comprender el propósito del proyecto y mantener coherencia con la marca.

---

# Principio más importante

La IA no debe intentar rediseñar el proyecto.

Su función es ayudar a evolucionarlo.

Siempre debe respetar la arquitectura, la identidad visual y las decisiones previamente tomadas, salvo que se solicite explícitamente una revisión de esas decisiones.

---

# Flujo de trabajo

Cada tarea debe seguir este orden:

1. Comprender el objetivo.
2. Analizar el código existente.
3. Explicar el plan de implementación.
4. Esperar aprobación si el cambio es significativo.
5. Implementar únicamente lo solicitado.
6. Mantener consistencia con el resto del proyecto.

Nunca realizar cambios masivos sin autorización.

---

# Alcance de cada tarea

Cada solicitud debe resolver un único problema.

Ejemplos:

* mejorar el Hero;
* actualizar una sección;
* corregir accesibilidad;
* mejorar SEO;
* agregar una animación;
* integrar una API.

Evitar combinar múltiples tareas en una sola implementación.

---

# Filosofía de desarrollo

Siempre preferir:

* simplicidad;
* claridad;
* mantenibilidad;
* reutilización.

No agregar complejidad si no aporta valor real.

---

# Antes de modificar código

La IA debe analizar:

* componentes existentes;
* estilos reutilizables;
* estructura actual;
* documentación dentro de `/docs`.

Siempre reutilizar componentes antes de crear nuevos.

---

# Cambios permitidos

La IA puede:

* mejorar código existente;
* refactorizar pequeñas partes cuando sea necesario;
* corregir errores;
* mejorar rendimiento;
* mejorar accesibilidad;
* mejorar SEO;
* optimizar componentes;
* reemplazar contenido ficticio por contenido real cuando se solicite.

---

# Cambios NO permitidos

No realizar sin autorización:

* rediseñar la web;
* cambiar la identidad visual;
* modificar la arquitectura general;
* agregar nuevas librerías sin justificarlo;
* reemplazar componentes completos cuando una modificación es suficiente;
* inventar contenido profesional;
* inventar experiencia;
* inventar métricas;
* inventar proyectos;
* inventar testimonios.

---

# Contenido

Todo el contenido debe estar basado en información real.

Si falta información, la IA debe solicitarla o dejar claramente indicado que se trata de un placeholder.

Nunca completar información inventada para "hacer que la página se vea mejor".

La credibilidad de la marca tiene prioridad sobre la apariencia.

---

# Estilo de código

Siempre respetar el estilo existente del proyecto.

Evitar crear nuevas convenciones.

Mantener consistencia en:

* nombres;
* estructura;
* componentes;
* imports;
* organización.

---

# Componentes

Antes de crear un componente nuevo, verificar si ya existe uno reutilizable.

Preferir extender componentes existentes antes que duplicar funcionalidad.

---

# Dependencias

No instalar nuevas dependencias salvo que:

* resuelvan un problema real;
* simplifiquen considerablemente el proyecto;
* sean compatibles con el stack existente.

Siempre justificar su incorporación.

---

# Rendimiento

Cada implementación debe considerar:

* rendimiento;
* accesibilidad;
* responsive;
* SEO;
* mantenibilidad.

No sacrificar rendimiento por efectos visuales innecesarios.

---

# Diseño

El diseño ya fue definido.

La IA debe respetar:

* estilo minimalista;
* estética profesional;
* inspiración en herramientas para desarrolladores;
* tema oscuro;
* espaciado consistente;
* animaciones sutiles.

No introducir estilos que contradigan la identidad de la marca.

---

# Comunicación durante el desarrollo

Antes de modificar varios archivos, explicar brevemente:

* qué se va a hacer;
* por qué;
* qué archivos serán modificados.

Después de implementar, resumir:

* qué cambió;
* por qué;
* posibles mejoras futuras (solo si fueron solicitadas).

---

# Metodología del proyecto

Este proyecto trabaja con dos modos claramente diferenciados.

## Modo Diseño

Se utiliza para:

* explorar ideas;
* comparar alternativas;
* definir arquitectura;
* debatir decisiones.

En este modo se aceptan propuestas y distintas posibilidades.

---

## Modo Ejecución

Se utiliza para implementar decisiones ya tomadas.

En este modo la IA debe:

* generar exactamente lo solicitado;
* no ampliar el alcance;
* no proponer nuevas ideas;
* no modificar decisiones previamente aprobadas.

Las mejoras solo deben discutirse cuando el usuario solicite volver al modo Diseño.

---

# Documentación

Antes de realizar cambios relevantes, revisar:

* 01_BRAND.md
* 02_AI_GUIDELINES.md
* 03_CONTENT.md
* 04_ROADMAP.md

Estos documentos tienen prioridad sobre cualquier interpretación del proyecto realizada por la IA.

---

# Objetivo final

Toda decisión técnica debe contribuir a construir una plataforma profesional, confiable y preparada para evolucionar durante los próximos años.

La IA no trabaja para escribir código.

Trabaja para ayudar a construir Franco Brand.
