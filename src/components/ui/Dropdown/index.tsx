import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styled'

import type { LocationWithImage } from 'src/utils/types/contextsTypes/planets.types'

type DropdownProps = {
  items: LocationWithImage[]
}

export const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        <Image
          src="/images/planet-icon.png"
          alt="icone de planeta"
          sizes="100vw"
          style={{
            width: '100%',
            maxWidth: '36px',
          }}
          width={36}
          height={36}
        />
        Pesquise outro planeta
      </S.DropdownButton>
      <S.DropdownContent isOpen={isOpen}>
        {items.map((item) => (
          <S.DropdownItem key={item.id} href={item.link}>
            {item.name}
          </S.DropdownItem>
        ))}
      </S.DropdownContent>
    </S.DropdownContainer>
  )
}
