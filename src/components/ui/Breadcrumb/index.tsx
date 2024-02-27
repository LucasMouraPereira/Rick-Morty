import React from 'react'
import Link from 'next/link'
import * as S from './styled'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <S.BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === items.length - 1 ? (
            <S.BreadcrumbItem isActive={true}>{item.label}</S.BreadcrumbItem>
          ) : (
            <Link href={item.href ?? ''} passHref>
              <S.BreadcrumbItem isActive={false}>{item.label}</S.BreadcrumbItem>
            </Link>
          )}
          {index < items.length - 1 && <S.Separator>/</S.Separator>}
        </React.Fragment>
      ))}
    </S.BreadcrumbContainer>
  )
}
