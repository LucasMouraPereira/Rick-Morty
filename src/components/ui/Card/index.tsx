import Image from 'next/image'
import type { residentsProps } from 'src/utils/types/contextsTypes/planets.types'
import * as S from './styled'

type CardProps = {
  resident: residentsProps
}

export const Card = ({ resident }: CardProps) => {
  // console.log(resident)
  // debugger
  return (
    <S.WrapperCard>
      <Image
        src={resident.image}
        alt={resident.name}
        sizes="100vw"
        style={{
          width: '100%',
        }}
        width={416}
        height={416}
      />
      <h2>{resident.name}</h2>
      <ul>
        <li>
          <strong>Gender:</strong> {resident.gender}
        </li>
        <li>
          <strong>Species:</strong> {resident.species}
        </li>
        <li>
          <strong>Status:</strong> {resident.status}
        </li>
        <li>
          <strong>Type:</strong> {resident.type}
        </li>
      </ul>
    </S.WrapperCard>
  )
}
