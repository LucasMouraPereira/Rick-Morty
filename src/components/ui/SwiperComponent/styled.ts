import styled, { css } from 'styled-components'

export const WrapperSwiper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      width: 310px;
      min-height: 540px;
      text-align: center;
      font-size: 18px;
      background: ${theme.colors.palette.green[300]};
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-radius: 20px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: ${theme.colors.palette.green[300]};
      &:after {
        font-size: 75px;
      }
    }
  `}
`

export const WrapperCard = styled.div`
  ${() => css`
    img {
      border-radius: 20px;
    }
  `}
`
