export function formatPrice(price, currency = 'INR') {
  if (currency === 'INR') {
    if (price >= 10000000) {
      const cr = price / 10000000
      return `₹${parseFloat(cr.toFixed(2))} Cr`
    }
    if (price >= 100000) {
      const lakh = price / 100000
      return `₹${parseFloat(lakh.toFixed(2))} Lakh`
    }
    return `₹${price.toLocaleString('en-IN')}`
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatArea(area, unit = 'sq.yd') {
  return `${area.toLocaleString('en-IN')} ${unit}`
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
