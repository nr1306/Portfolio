import { ImageResponse } from 'next/og'

export const alt = 'Nesh Rochwani | Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            position: 'relative',
          }}
        >
          {/* Initials circle */}
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(99,102,241,0.5), 0 0 120px rgba(99,102,241,0.2)',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-2px',
              }}
            >
              NR
            </span>
          </div>

          {/* Name & title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '56px',
                fontWeight: 800,
                color: '#f8fafc',
                letterSpacing: '-1px',
              }}
            >
              Nesh Rochwani
            </span>
            <span
              style={{
                fontSize: '26px',
                fontWeight: 400,
                color: '#94a3b8',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Software Engineer
            </span>
          </div>

          {/* Divider pill */}
          <div
            style={{
              width: '80px',
              height: '3px',
              borderRadius: '999px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
