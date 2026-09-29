import { ImageResponse } from 'next/og'

type SocialImageSize = {
  width: number
  height: number
}

export function createSocialImage(size: SocialImageSize) {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          background: '#080a0d',
          color: '#f5f4ef',
          padding: '58px 70px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0 0 auto 0',
            display: 'flex',
            height: 3,
            background: '#32c4df',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            width: 310,
            height: '100%',
            borderLeft: '1px solid rgba(50, 196, 223, 0.2)',
            background: 'rgba(50, 196, 223, 0.025)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 112,
              right: 72,
              display: 'flex',
              width: 168,
              height: 210,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transform: 'rotate(-4deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 146,
              right: 44,
              display: 'flex',
              width: 178,
              height: 1,
              background: 'rgba(50, 196, 223, 0.55)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 72,
              bottom: 92,
              display: 'flex',
              width: 82,
              height: 82,
              borderRight: '3px solid #f4a31f',
              borderBottom: '3px solid #f4a31f',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: '0.14em',
            }}
          >
            FRANCO OLIVA
          </span>
          <span
            style={{
              display: 'flex',
              width: 42,
              height: 2,
              margin: '0 22px',
              background: '#f4a31f',
            }}
          />
          <span
            style={{
              color: '#32c4df',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.16em',
            }}
          >
            UNREAL AUTHORIZED INSTRUCTOR
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            maxWidth: 820,
            flexDirection: 'column',
            fontSize: 70,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 0.93,
          }}
        >
          <span>UNREAL ENGINE</span>
          <span style={{ color: '#32c4df' }}>TECHNICAL UI</span>
          <span>&amp; FORMACIÓN</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: '#a5a9b2', fontSize: 21 }}>
            Desarrollo proyectos y comparto conocimiento.
          </span>
          <span
            style={{
              color: '#f4a31f',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            FRANCOOLIVA.DEV
          </span>
        </div>
      </div>
    ),
    size,
  )
}
