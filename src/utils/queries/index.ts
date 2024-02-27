export const queryPlanets = (
  pageNum: number,
  selectedDimension: string | null
) => `
  query {
    locations(page: ${pageNum}, filter: { type: "Planet"${
      selectedDimension ? `, dimension: "${selectedDimension}"` : ''
    } }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          status
          species
          type
          gender
          image
        }
      }
    }
  }
`

export const queryDimensions = (pageSize: number) => `
  query {
    locations (filter: { type: "Planet" }, page: ${pageSize}) {
      results {
        dimension
      }
    }
  }
`
