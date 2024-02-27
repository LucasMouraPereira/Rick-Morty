'use client'
import Link from 'next/link'
import { paths } from 'src/utils/enums/paths'
import * as S from './styled'

export const Logo = () => (
  <S.WrapperLogo>
    <Link href={paths.HOME}>
      <h1>Rick And Morty</h1>
    </Link>
  </S.WrapperLogo>
)
