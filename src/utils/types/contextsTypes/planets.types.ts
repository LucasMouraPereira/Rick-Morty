import { Dispatch, SetStateAction } from 'react'

export interface Info {
  count: number
  pages: number
  next: number | null
  prev: number | null
}

export interface Image {
  image: {
    alt: string
    src: string
    size: number
    desk: {
      top: string
      left: string
    }
    mob: {
      top: string
      left: string
    }
  }
}

export type residentsProps = {
  gender: string
  id: string
  image: string
  name: string
  species: string
  status: string
  type: string
}

export interface Location {
  id: string | number
  title: string
  link: string
  name: string
  type: string
  dimension: string
  residents: Array<residentsProps>
}

export interface Dimensions {
  dimension: string
}

export type LocationWithImage = Location & Image

export type PlanetsContextValuesProps = {
  locations: LocationWithImage[]
  setNextPage: Dispatch<SetStateAction<number | null>>
  setPrevPage: Dispatch<SetStateAction<number | null>>
  page: Info
  setSelectedDimension: Dispatch<SetStateAction<string | null>>
  location: LocationWithImage | null | undefined
  dimensions?: Dimensions[]
}
