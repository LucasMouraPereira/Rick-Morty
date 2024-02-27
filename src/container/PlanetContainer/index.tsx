/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from 'next/image'
import { SwiperComponent } from 'src/components/ui/SwiperComponent'
import { Dropdown } from 'src/components/ui/Dropdown'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'
import { usePlanetsContext } from 'src/Providers/PlanetsContext'
import * as S from './styled'

export const PlanetContainer = () => {
  const { location, locations } = usePlanetsContext()
  if (!location || !location.image || !location.image.src) {
    return null
  }
  const NamePlanetText = useTextAnimation({ fullText: location.name })
  const NameDimensionText = useTextAnimation({ fullText: location.dimension })
  return (
    <S.WrapperLocation>
      <S.Location>
        <S.WrapperImage>
          <Image
            src={location.image.src}
            alt={location.image.alt}
            quality={100}
            fill
            objectFit="scale-down"
            sizes="(max-width: 200px) 200px, 200px"
          />
        </S.WrapperImage>
        <S.WrapperText>
          <div>
            <strong>Planeta:</strong> <p>{NamePlanetText}</p>
          </div>
          <div>
            <strong>Dimensão:</strong> <p>{NameDimensionText}</p>
          </div>
        </S.WrapperText>
      </S.Location>
      {location.residents.length ? (
        <SwiperComponent residents={location.residents} />
      ) : (
        <S.WithoutResidents>
          {' '}
          <h3>Atenção!!!</h3>
          <S.WrapperGif>
            <Image
              src="/images/portal.gif"
              alt="portal"
              quality={100}
              fill
              objectFit="scale-down"
              sizes="(max-width: 300px) 300px, 300px"
            />
          </S.WrapperGif>
          <p>Este planeta não tem moradores...</p>
          <Dropdown items={locations} />
        </S.WithoutResidents>
      )}
    </S.WrapperLocation>
  )
}
