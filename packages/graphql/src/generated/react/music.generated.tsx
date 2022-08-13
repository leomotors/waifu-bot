import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddMusicToPlaylistMutationVariables = Types.Exact<{
  url: Types.Scalars['String'];
  playlistId: Types.Scalars['Int'];
}>;


export type AddMusicToPlaylistMutation = { __typename?: 'Mutation', addMusicToPlaylist: { __typename?: 'Music', videoId: string, title: string, shortDescription: string, lengthSeconds: string, viewCount: string, authorName: string, authorChannelUrl: string, thumbnailUrl: string, likes: number } };

export type RemoveMusicFromPlaylistMutationVariables = Types.Exact<{
  playlistId: Types.Scalars['Int'];
  musicId: Types.Scalars['String'];
}>;


export type RemoveMusicFromPlaylistMutation = { __typename?: 'Mutation', removeMusicFromPlaylist: { __typename?: 'Music', videoId: string } };


export const AddMusicToPlaylistDocument = gql`
    mutation addMusicToPlaylist($url: String!, $playlistId: Int!) {
  addMusicToPlaylist(url: $url, playlistId: $playlistId) {
    videoId
    title
    shortDescription
    lengthSeconds
    viewCount
    authorName
    authorChannelUrl
    thumbnailUrl
    likes
  }
}
    `;
export type AddMusicToPlaylistMutationFn = Apollo.MutationFunction<AddMusicToPlaylistMutation, AddMusicToPlaylistMutationVariables>;

/**
 * __useAddMusicToPlaylistMutation__
 *
 * To run a mutation, you first call `useAddMusicToPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMusicToPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMusicToPlaylistMutation, { data, loading, error }] = useAddMusicToPlaylistMutation({
 *   variables: {
 *      url: // value for 'url'
 *      playlistId: // value for 'playlistId'
 *   },
 * });
 */
export function useAddMusicToPlaylistMutation(baseOptions?: Apollo.MutationHookOptions<AddMusicToPlaylistMutation, AddMusicToPlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMusicToPlaylistMutation, AddMusicToPlaylistMutationVariables>(AddMusicToPlaylistDocument, options);
      }
export type AddMusicToPlaylistMutationHookResult = ReturnType<typeof useAddMusicToPlaylistMutation>;
export type AddMusicToPlaylistMutationResult = Apollo.MutationResult<AddMusicToPlaylistMutation>;
export type AddMusicToPlaylistMutationOptions = Apollo.BaseMutationOptions<AddMusicToPlaylistMutation, AddMusicToPlaylistMutationVariables>;
export const RemoveMusicFromPlaylistDocument = gql`
    mutation removeMusicFromPlaylist($playlistId: Int!, $musicId: String!) {
  removeMusicFromPlaylist(playlistId: $playlistId, musicId: $musicId) {
    videoId
  }
}
    `;
export type RemoveMusicFromPlaylistMutationFn = Apollo.MutationFunction<RemoveMusicFromPlaylistMutation, RemoveMusicFromPlaylistMutationVariables>;

/**
 * __useRemoveMusicFromPlaylistMutation__
 *
 * To run a mutation, you first call `useRemoveMusicFromPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMusicFromPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMusicFromPlaylistMutation, { data, loading, error }] = useRemoveMusicFromPlaylistMutation({
 *   variables: {
 *      playlistId: // value for 'playlistId'
 *      musicId: // value for 'musicId'
 *   },
 * });
 */
export function useRemoveMusicFromPlaylistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMusicFromPlaylistMutation, RemoveMusicFromPlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMusicFromPlaylistMutation, RemoveMusicFromPlaylistMutationVariables>(RemoveMusicFromPlaylistDocument, options);
      }
export type RemoveMusicFromPlaylistMutationHookResult = ReturnType<typeof useRemoveMusicFromPlaylistMutation>;
export type RemoveMusicFromPlaylistMutationResult = Apollo.MutationResult<RemoveMusicFromPlaylistMutation>;
export type RemoveMusicFromPlaylistMutationOptions = Apollo.BaseMutationOptions<RemoveMusicFromPlaylistMutation, RemoveMusicFromPlaylistMutationVariables>;