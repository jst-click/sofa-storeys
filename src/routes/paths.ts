import type { ServiceSlug } from '../data/services'

export const ROUTES = {
  home: '/',
  sofas: '/sofas',
  customSofas: '/custom-sofas',
  services: '/services',
  lookbook: '/lookbook',
  contact: '/contact',
} as const

export function serviceDetailPath(slug: ServiceSlug) {
  return `${ROUTES.services}/${slug}` as const
}
