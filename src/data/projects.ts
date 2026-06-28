import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'LAB-01',
    title: 'Laboratorio de Videojuegos',
    tag: 'Videojuego UGC',
    type: 'Proyecto colaborativo en Unreal Engine',
    image: {
      src: '/projects/laboratorio-videojuegos-menu2.png',
      alt: 'Captura del menú principal de Laboratorio de Videojuegos',
    },
    problem:
      'El equipo necesitaba incorporar assets 3D al proyecto de forma constante, manteniendo nombres, colisiones y registros en Data Tables de manera consistente.',
    context:
      'Proyecto desarrollado en Unreal Engine junto a un pequeño equipo dirigido por Federico Garazo, cofundador de Academia Brinca. Es mi primera experiencia real trabajando dentro de un equipo de desarrollo de videojuegos.',
    solution:
      'Además de colaborar desde el área de arte 3D, comencé a crear herramientas internas para reducir tareas repetitivas y mejorar el flujo de trabajo entre arte y desarrollo.',
    implementation:
      'Importé modelos 3D, los organicé en Data Tables, desarrollé Utility Scripts para acelerar la carga de assets, modificar colisiones en Static Meshes y renombrar assets de forma consistente. También colaboré con Blueprints, revisión de animaciones y soporte técnico dentro del proyecto.',
    result:
      'El flujo de incorporación de contenido se volvió más rápido y ordenado, reduciendo errores manuales y facilitando que el equipo de desarrollo pudiera utilizar los assets con mayor consistencia.',
    learnings:
      'Este proyecto me permitió entender Unreal Engine en un contexto real de producción: colaborar con distintas áreas, detectar fricciones del workflow y convertir problemas cotidianos en herramientas prácticas.',
    tech: [
      'Unreal Engine',
      'Blueprints',
      'Editor Utility Scripts',
      'Data Tables',
      'Static Meshes',
      'Arte 3D',
      'Workflow',
    ],
  },
]
