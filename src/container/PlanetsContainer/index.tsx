'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'
import { usePlanetsContext } from 'src/Providers/PlanetsContext'

import * as S from './styled'
import { useState } from 'react'

export const PlanetsContainer = () => {
  const [namePlanet, setNamePlanet] = useState<string>('')
  const isDesktop = useMediaQuery('(min-width: 1136px)')
  const { locations } = usePlanetsContext()
  const NamePlanetText = useTextAnimation({ fullText: namePlanet })
  return (
    <S.Locations>
      {locations.map(({ id, image, name, link }) => (
        <S.WrapperLocation
          key={id}
          topDesk={image.desk.top}
          leftDesk={image.desk.left}
          topMob={image.mob.top}
          leftMob={image.mob.left}
          onMouseOver={() => setNamePlanet(name)}
          onMouseOut={() => setNamePlanet('')}
        >
          {namePlanet === name && <span>{NamePlanetText}</span>}
          <Link href={link}>
            <Image
              src={image.src}
              alt={image.alt}
              quality={100}
              width={isDesktop ? image.size : image.size / 2}
              height={isDesktop ? image.size : image.size / 2}
            />
          </Link>
        </S.WrapperLocation>
      ))}
    </S.Locations>
  )
}
