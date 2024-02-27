import type { ChildrenProps } from 'src/utils/types/global.types'
import * as S from './styled'

type ContainerProps = {
  className?: string
} & ChildrenProps

export const Container = ({ children, className }: ContainerProps) => (
  <S.WrapperContainer>
    <S.Container className={className}>{children}</S.Container>
  </S.WrapperContainer>
)
