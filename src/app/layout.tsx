import { Providers } from 'src/Providers'
import { StyledComponentsRegistry } from 'src/app/registry'
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'src/utils/styles/loadFonts.css'

import type { ChildrenProps } from 'src/utils/types/global.types'

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="pt-br">
      <head>
        <title>Portfolio - Lucas Moura Pereira</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
