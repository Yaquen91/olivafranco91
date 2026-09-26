# AGENTS.md

# Franco Brand — AI Project Guide

Este proyecto utiliza documentación interna para mantener consistencia entre todas las sesiones de desarrollo.

Antes de realizar cualquier cambio, leer los siguientes documentos en el orden indicado:

1. `docs/01_BRAND.md`
2. `docs/02_AI_GUIDELINES.md`
3. `docs/03_CONTENT.md`
4. `docs/04_ROADMAP.md`

Estos documentos tienen prioridad sobre cualquier interpretación realizada por la IA.

---

## Objetivo del proyecto

Franco Brand es la plataforma central de la marca profesional de Franco Oliva.

Su propósito es ayudar a desarrolladores y equipos a construir mejores proyectos con Unreal Engine mediante herramientas, workflows y formación técnica basada en experiencia real.

No es un portfolio tradicional ni una academia online.

---

## Forma de trabajo

* Comprender el objetivo antes de modificar código.
* Respetar las decisiones documentadas.
* Mantener la arquitectura existente.
* Implementar una tarea a la vez.
* Priorizar cambios pequeños y fáciles de revisar.
* Explicar el plan antes de modificar múltiples archivos.

---

## Principios

* No rediseñar la web salvo solicitud explícita.
* No inventar contenido, proyectos, métricas o experiencia.
* Mantener la identidad visual aprobada.
* Reutilizar componentes antes de crear nuevos.
* Evitar dependencias innecesarias.
* Priorizar claridad, rendimiento, accesibilidad, SEO y mantenibilidad.
* Seguir las buenas prácticas de Next.js, React, TypeScript y Tailwind CSS.

---

## Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React

---

## Regla principal

Si existe alguna duda sobre cómo implementar una funcionalidad, consultar primero la documentación dentro de `/docs` antes de tomar una decisión.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
