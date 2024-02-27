/* eslint-disable import/no-anonymous-default-export */
import { NextResponse } from 'next/server'
import { request } from 'src/utils/graphql/request'
import { queryDimensions } from 'src/utils/queries'

import type { Dimensions } from 'src/utils/types/contextsTypes/planets.types'

const fetchDimensions = async (pageSize: number) => {
  const data = await request<{
    locations: { results: Dimensions[] }
  }>(queryDimensions(pageSize))

  const { results } = data.locations
  return { results }
}

const getAllDimensions = async () => {
  let page = 1
  let allDimensions: Dimensions[] = []
  let breakPoint = true

  while (breakPoint) {
    const { results } = await fetchDimensions(page)

    if (results.length === 0) {
      breakPoint = false
      break
    }

    allDimensions = [...allDimensions, ...results]
    page++
  }

  const uniqueDimensions = allDimensions.reduce(
    (acc: Dimensions[], current: Dimensions) => {
      const dimensionExists = acc.some(
        (item) => item.dimension === current.dimension
      )
      if (!dimensionExists) {
        acc.push(current)
      }
      return acc
    },
    []
  )

  return uniqueDimensions
}

export async function GET() {
  try {
    const data = await getAllDimensions()
    return NextResponse.json(data)
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message || e.toString() })
    } else {
      return NextResponse.json({ error: 'Unknown error occurred' })
    }
  }
}
