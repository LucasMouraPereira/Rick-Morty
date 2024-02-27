import { PlanetsProvider } from 'src/Providers/PlanetsContext'
import { PlanetsContainer } from 'src/container/PlanetsContainer'

async function getData() {
  const res = await fetch('http://localhost:3000/api/dimensions', {
    next: { revalidate: 60 },
  })

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Planets = async () => {
  const data = await getData()

  return (
    <PlanetsProvider dimensions={data}>
      <PlanetsContainer />
    </PlanetsProvider>
  )
}

export default Planets
