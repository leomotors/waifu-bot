import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMyPlaylistsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyPlaylistsQuery = { __typename?: 'Query', me: { __typename?: 'User', playlist?: Array<{ __typename?: 'Playlist', id: string, name: string, description?: string | null, _count: { __typename?: 'PlaylistCount', music: number } }> | null } };

export type CreateUserPlaylistMutationVariables = Types.Exact<{
  data: Types.PlaylistCreateWithoutOwnerInput;
}>;


export type CreateUserPlaylistMutation = { __typename?: 'Mutation', createUserPlaylist: { __typename?: 'Playlist', id: string } };


export const GetMyPlaylistsDocument = gql`
    query getMyPlaylists {
  me {
    playlist {
      id
      name
      description
      _count {
        music
      }
    }
  }
}
    `;

/**
 * __useGetMyPlaylistsQuery__
 *
 * To run a query within a React component, call `useGetMyPlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyPlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyPlaylistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyPlaylistsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyPlaylistsQuery, GetMyPlaylistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyPlaylistsQuery, GetMyPlaylistsQueryVariables>(GetMyPlaylistsDocument, options);
      }
export function useGetMyPlaylistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyPlaylistsQuery, GetMyPlaylistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyPlaylistsQuery, GetMyPlaylistsQueryVariables>(GetMyPlaylistsDocument, options);
        }
export type GetMyPlaylistsQueryHookResult = ReturnType<typeof useGetMyPlaylistsQuery>;
export type GetMyPlaylistsLazyQueryHookResult = ReturnType<typeof useGetMyPlaylistsLazyQuery>;
export type GetMyPlaylistsQueryResult = Apollo.QueryResult<GetMyPlaylistsQuery, GetMyPlaylistsQueryVariables>;
export const CreateUserPlaylistDocument = gql`
    mutation createUserPlaylist($data: PlaylistCreateWithoutOwnerInput!) {
  createUserPlaylist(data: $data) {
    id
  }
}
    `;
export type CreateUserPlaylistMutationFn = Apollo.MutationFunction<CreateUserPlaylistMutation, CreateUserPlaylistMutationVariables>;

/**
 * __useCreateUserPlaylistMutation__
 *
 * To run a mutation, you first call `useCreateUserPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserPlaylistMutation, { data, loading, error }] = useCreateUserPlaylistMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserPlaylistMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserPlaylistMutation, CreateUserPlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserPlaylistMutation, CreateUserPlaylistMutationVariables>(CreateUserPlaylistDocument, options);
      }
export type CreateUserPlaylistMutationHookResult = ReturnType<typeof useCreateUserPlaylistMutation>;
export type CreateUserPlaylistMutationResult = Apollo.MutationResult<CreateUserPlaylistMutation>;
export type CreateUserPlaylistMutationOptions = Apollo.BaseMutationOptions<CreateUserPlaylistMutation, CreateUserPlaylistMutationVariables>;