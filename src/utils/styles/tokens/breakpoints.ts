export const sizes = {
  xxxl: 1630,
  xxl: 1280,
  xl: 1136,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 320,
}
export type Sizes = keyof typeof sizes

export const breakpoints = {
  sizes,
  minWidth: (size: Sizes) => {
    return `@media (min-width: ${sizes[size]}px)`
  },
  maxWidth: (size: Sizes) => {
    return `@media (max-width: ${sizes[size]}px)`
  },
}
