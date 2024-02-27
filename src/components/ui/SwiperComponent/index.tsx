import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'
import { Card } from 'src/components/ui/Card'

import type { residentsProps } from 'src/utils/types/contextsTypes/planets.types'

import * as S from './styled'

type SwiperComponentProps = {
  residents: residentsProps[]
}

export const SwiperComponent = ({ residents }: SwiperComponentProps) => {
  const isDesktop = useMediaQuery('(min-width: 1136px)')
  return (
    <S.WrapperSwiper>
      <Swiper
        modules={[FreeMode, Navigation]}
        freeMode={true}
        spaceBetween={16}
        slidesPerView={isDesktop ? 3 : 'auto'}
        navigation={true}
        centeredSlides={residents.length < 2 ? true : false}
      >
        {residents.map((resident) => (
          <SwiperSlide key={resident.id}>
            <Card resident={resident} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WrapperSwiper>
  )
}
