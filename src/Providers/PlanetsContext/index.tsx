'use client'
import { useState, useEffect, useContext, createContext } from 'react'
import { data } from 'src/container/PlanetsContainer/data'
import { request } from 'src/utils/graphql/request'
import { queryPlanets } from 'src/utils/queries'
import type {
  Location,
  PlanetsContextValuesProps,
  Info,
  LocationWithImage,
  Dimensions,
} from 'src/utils/types/contextsTypes/planets.types'

const PlanetsContextValues: PlanetsContextValuesProps = {
  locations: [],
  setNextPage: () => ({}),
  setPrevPage: () => ({}),
  page: {
    count: 0,
    pages: 0,
    next: 1,
    prev: null,
  },
  setSelectedDimension: () => ({}),
  location: null,
  dimensions: [],
}

export const PlanetsContext = createContext(PlanetsContextValues)

export const usePlanetsContext = () => useContext(PlanetsContext)

type PlanetsProviderProps = {
  children: React.ReactNode
  dimensions?: Dimensions[]
  slug?: string
}

export const PlanetsProvider = ({
  children,
  dimensions,
  slug,
}: PlanetsProviderProps) => {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(
    null
  )
  const [nextPage, setNextPage] = useState<number | null>(1)
  const [prevPage, setPrevPage] = useState<number | null>(null)
  const [page, setPage] = useState<Info>({
    count: 0,
    pages: 0,
    next: nextPage,
    prev: prevPage,
  })
  const [locations, setLocations] = useState<LocationWithImage[]>([])
  const [location, setLocation] = useState<
    LocationWithImage | null | undefined
  >(null)

  useEffect(() => {
    const fetchPlanets = async (pageNum: number) => {
      const data = await request<{
        locations: { info: Info; results: Location[] }
      }>(queryPlanets(pageNum, selectedDimension))

      const { info, results } = data.locations

      return { info, results }
    }

    const currentPage = nextPage === null ? prevPage : nextPage

    fetchPlanets(currentPage as number).then(({ info, results }) => {
      const planets: LocationWithImage[] = results.map((planet, index) => ({
        ...planet,
        ...data[index],
        id: data[index].id.toString(),
      }))
      setPage(info)
      setLocations(planets)
    })
  }, [nextPage, prevPage, selectedDimension])

  useEffect(() => {
    if (locations.length) {
      const planet: LocationWithImage | null | undefined = locations.find(
        ({ title }) => title === slug
      )
      setLocation(planet)
    }
  }, [locations])

  return (
    <PlanetsContext.Provider
      value={{
        locations,
        setNextPage,
        setPrevPage,
        page,
        setSelectedDimension,
        location,
        dimensions,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  )
}
