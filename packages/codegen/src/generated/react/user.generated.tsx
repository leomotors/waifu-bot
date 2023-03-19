import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMyInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, profile?: { __typename?: 'Profile', username: string, lastInteractGuildName: string, avatarUrl: string } | null, _count: { __typename?: 'UserCount', playlist: number } } };


export const GetMyInfoDocument = gql`
    query getMyInfo {
  me {
    id
    profile {
      username
      lastInteractGuildName
      avatarUrl
    }
    createdAt
    updatedAt
    _count {
      playlist
    }
  }
}
    `;

/**
 * __useGetMyInfoQuery__
 *
 * To run a query within a React component, call `useGetMyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetMyInfoQuery, GetMyInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyInfoQuery, GetMyInfoQueryVariables>(GetMyInfoDocument, options);
      }
export function useGetMyInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyInfoQuery, GetMyInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyInfoQuery, GetMyInfoQueryVariables>(GetMyInfoDocument, options);
        }
export type GetMyInfoQueryHookResult = ReturnType<typeof useGetMyInfoQuery>;
export type GetMyInfoLazyQueryHookResult = ReturnType<typeof useGetMyInfoLazyQuery>;
export type GetMyInfoQueryResult = Apollo.QueryResult<GetMyInfoQuery, GetMyInfoQueryVariables>;