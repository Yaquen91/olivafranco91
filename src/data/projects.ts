import type { Project } from '@/types/project'

export const projects = [
  {
    id: 'LAB-01',
    imageSrc: '/projects/laboratorio-videojuegos-menu2.png',
  },
] as const satisfies readonly Project[]
