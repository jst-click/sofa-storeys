import type { ReactNode } from 'react'
import type { ServiceSlug } from '../../data/services'

const paths: Record<ServiceSlug, ReactNode> = {
  'recliner-repair': (
    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2zm12 0l4 4-4 4v-8z" />
  ),
  'foam-replacement': (
    <path d="M4 8h16v8H4V8zm2 2v4h12v-4H6zm2-6h8v2H8V4zm0 14h8v2H8v-2z" />
  ),
  upholstery: (
    <path d="M4 4h16v4H4V4zm0 6h8v6H4v-6zm10 0h6v10h-6V10zM6 12h4v4H6v-4zm8 2h4v2h-4v-2z" />
  ),
  'sofa-renovation': <path d="M3 17h18v2H3v-2zm-1-4h20v2H2v-2zm2-4h16v2H4V9zm0-4h16v2H4V5z" />,
  'custom-sofa-design': (
    <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" />
  ),
}

export function ServiceIcon({ slug, className = 'h-7 w-7' }: { slug: ServiceSlug; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {paths[slug]}
    </svg>
  )
}
