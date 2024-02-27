import { PlanetsProvider } from 'src/Providers/PlanetsContext'
import { PlanetsContainer } from 'src/container/PlanetsContainer'

async function getData(baseUrl: string) {
  const res = await fetch(`${baseUrl}/api/dimensions`, {
    next: { revalidate: 60 },
  })

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Planets = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
  const data = await getData(baseUrl)
  return (
    <PlanetsProvider dimensions={data}>
      <PlanetsContainer />
    </PlanetsProvider>
  )
}

export default Planets
