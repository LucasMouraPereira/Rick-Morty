/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from 'graphql-request'
import { constants } from 'src/utils/enums/constants'

const graphQLClient = new GraphQLClient(constants.base_url)

export const request = async <T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> => {
  try {
    return await graphQLClient.request<T>(query, variables)
  } catch (error) {
    console.error(error)
    throw error
  }
}
