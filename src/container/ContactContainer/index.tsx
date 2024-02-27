'use client'
import Image from 'next/image'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'

import WebSiteIcon from 'src/utils/icons/Website.svg'
import GitHub from 'src/utils/icons/GitHub.svg'
import InstagramIcon from 'src/utils/icons/Instagram.svg'
import LinkedInIcon from 'src/utils/icons/LinkedIn.svg'

import { iconsData } from './data'

import * as S from './styled'

interface Icons {
  [key: string]: JSX.Element
}

export const ContactContainer = () => {
  const isDesktop = useMediaQuery('(min-width: 1136px)')
  const dialog = useTextAnimation({
    fullText:
      'Hey, Olhe isso, Morty! Este cara pode fazer o web site pra gente.',
  })

  const Icons: Icons = {
    website: <WebSiteIcon />,
    github: <GitHub />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
  }
  return (
    <S.WrapperContact>
      <S.Contact>
        <h1>Rick&Morty API by Lucas Moura Pereira</h1>
        <h2>Front-end Developer</h2>
        <span>
          NextJS • Styled Components • GraphQL • Context API • Typescript
        </span>
        <p>{dialog}</p>
        <S.WrapperIcons>
          {iconsData.map((data) => (
            <S.IconList key={data.slug} href={data.href} target="_blank">
              {Icons[data.slug]}
              <span>{data.label}</span>
            </S.IconList>
          ))}
        </S.WrapperIcons>
      </S.Contact>
      <div>
        <Image
          src="/images/contact.png"
          alt="contato"
          quality={100}
          sizes="100vw"
          style={{
            width: '100%',
            maxWidth: `${isDesktop ? '500px' : '200px'}`,
          }}
          width={isDesktop ? 500 : 200}
          height={isDesktop ? 500 : 200}
        />
      </div>
    </S.WrapperContact>
  )
}
