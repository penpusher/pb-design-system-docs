export const colors = {
  primary: {
    bg: '#002f30',
    hover: '#557475',
    active: '#002728',
  },
  brand: {
    bg: '#ffd900',
    hover: '#ffe655',
    active: '#d5b500',
  },
  secondaryTransp: {
    hover: '#fff2aa',
    active: '#fff2aa',
  },
  stroke: {
    brand: '#002f30',
    focus: '#286ed5',
    disabled: '#bdbdbd',
  },
  text: {
    inverse: '#ffffff',
    brand: '#002f30',
    disabled: '#bdbdbd',
  },
  bg: {
    disabled: '#e9e9e9',
  },
}

export const typography = {
  medium: { token: 'Desktop/par-md-strong', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '16px', lineHeight: '1.4' },
  large: { token: 'Desktop/par-lg-strong', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '20px', lineHeight: '1.5' },
}

export const spacing = [
  { token: 'spacing-2', value: '8px' },
  { token: 'spacing-3', value: '12px' },
  { token: 'spacing-4', value: '16px' },
  { token: 'spacing-5', value: '24px' },
  { token: 'spacing-6', value: '32px' },
]

export const styles = ['primary', 'primary-brand', 'secondary', 'transparent']
export const states = ['normal', 'hover', 'active-state', 'focus', 'disabled']
export const sizes = ['medium', 'large']
