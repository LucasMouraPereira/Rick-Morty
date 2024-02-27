'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'
import { data } from './data'

import * as S from './styled'

export const HomeContainer = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const PlanetsText = useTextAnimation({ fullText: 'PLANETS' })
  const ContactText = useTextAnimation({ fullText: 'CONTACT' })
  return (
    <S.WrapperHome>
      <S.Links
        onMouseOver={() => setSelected(data.goPlanets.id)}
        selected={selected === data.goPlanets.id}
      >
        <Link href={data.goPlanets.href}>{PlanetsText}</Link>
        <S.SelectedContent
          selected={selected === data.goPlanets.id}
          onClick={() => setSelected(data.goPlanets.id)}
        />
      </S.Links>

      <S.WrapperImage>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          quality={100}
          fill
          objectFit="scale-down"
          sizes="(max-width: 500px) 500px, 500px"
        />
      </S.WrapperImage>
      <S.Links
        onMouseOver={() => setSelected(data.goContact.id)}
        selected={selected === data.goContact.id}
      >
        <Link href={data.goContact.href}>{ContactText}</Link>
        <S.SelectedContent
          selected={selected === data.goContact.id}
          onClick={() => setSelected(data.goContact.id)}
        />
      </S.Links>
    </S.WrapperHome>
  )
}
