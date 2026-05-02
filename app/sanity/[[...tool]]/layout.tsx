import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanity Studio | Techtical',
  robots: { index: false },
}

// Prevent static pre-rendering — Studio must be client-only
export const dynamic = 'force-dynamic'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Full-viewport wrapper so the studio fills the screen
  return <div style={{ minHeight: '100vh' }}>{children}</div>
}
