import { PlanetsProvider } from 'src/Providers/PlanetsContext'
import { PlanetContainer } from 'src/container/PlanetContainer'

import { data } from 'src/container/PlanetsContainer/data'

type PlanetPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return data.map(({ title }) => ({
    slug: title,
  }))
}

const Planeta = ({ params }: PlanetPageProps) => {
  const { slug } = params
  return (
    <PlanetsProvider slug={slug}>
      <PlanetContainer />
    </PlanetsProvider>
  )
}

export default Planeta
