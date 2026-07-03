import { useMemo } from 'react'
import properties from '../data/properties.json'

export function useProperties(filters = {}) {
  const { status, minPrice, maxPrice, bedrooms } = filters

  return useMemo(() => {
    return properties.filter(property => {
      if (status && status !== 'all' && property.status !== status) return false
      if (minPrice && property.price < Number(minPrice)) return false
      if (maxPrice && property.price > Number(maxPrice)) return false
      if (bedrooms && property.specs.bedrooms < Number(bedrooms)) return false
      return true
    })
  }, [status, minPrice, maxPrice, bedrooms])
}

export function useProperty(id) {
  return useMemo(() => properties.find(p => p.id === id) ?? null, [id])
}

export function useFeaturedProperties() {
  return useMemo(() => properties.filter(p => p.featured), [])
}
