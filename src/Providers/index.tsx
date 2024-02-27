'use client'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'src/utils/styles/GlobalStyles'
import { theme } from 'src/utils/styles/theme'

import { generateBreadcrumbItems } from 'src/utils/lib/generateBreadcrumbItems'

import { Container } from 'src/components/ui/Container'
import { Logo } from 'src/components/ui/Logo'
import { Breadcrumb } from 'src/components/ui/Breadcrumb'

import type { ChildrenProps } from 'src/utils/types/global.types'

export const Providers = ({ children }: ChildrenProps) => {
  const pathname = usePathname()
  const items = generateBreadcrumbItems(pathname)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Breadcrumb items={items} />
        <Logo />
        {children}
      </Container>
    </ThemeProvider>
  )
}
