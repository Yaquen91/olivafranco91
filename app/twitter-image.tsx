import { createSocialImage } from '@/lib/social-image'

export const alt = 'Franco Oliva — Unreal Engine, Technical UI y formación'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function TwitterImage() {
  return createSocialImage(size)
}
