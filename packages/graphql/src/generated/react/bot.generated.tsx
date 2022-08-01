import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GenerateTokenMutationVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type GenerateTokenMutation = { __typename?: 'Mutation', generateToken: { __typename?: 'AccessToken', token: string } };

export type UpsertUserMutationVariables = Types.Exact<{
  data: Types.UserUpsertInput;
}>;


export type UpsertUserMutation = { __typename?: 'Mutation', upsertUser: { __typename?: 'User', id: string } };


export const GenerateTokenDocument = gql`
    mutation generateToken($where: UserWhereUniqueInput!) {
  generateToken(where: $where) {
    token
  }
}
    `;
export type GenerateTokenMutationFn = Apollo.MutationFunction<GenerateTokenMutation, GenerateTokenMutationVariables>;

/**
 * __useGenerateTokenMutation__
 *
 * To run a mutation, you first call `useGenerateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateTokenMutation, { data, loading, error }] = useGenerateTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGenerateTokenMutation(baseOptions?: Apollo.MutationHookOptions<GenerateTokenMutation, GenerateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateTokenMutation, GenerateTokenMutationVariables>(GenerateTokenDocument, options);
      }
export type GenerateTokenMutationHookResult = ReturnType<typeof useGenerateTokenMutation>;
export type GenerateTokenMutationResult = Apollo.MutationResult<GenerateTokenMutation>;
export type GenerateTokenMutationOptions = Apollo.BaseMutationOptions<GenerateTokenMutation, GenerateTokenMutationVariables>;
export const UpsertUserDocument = gql`
    mutation upsertUser($data: UserUpsertInput!) {
  upsertUser(data: $data) {
    id
  }
}
    `;
export type UpsertUserMutationFn = Apollo.MutationFunction<UpsertUserMutation, UpsertUserMutationVariables>;

/**
 * __useUpsertUserMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutation, { data, loading, error }] = useUpsertUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpsertUserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertUserMutation, UpsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertUserMutation, UpsertUserMutationVariables>(UpsertUserDocument, options);
      }
export type UpsertUserMutationHookResult = ReturnType<typeof useUpsertUserMutation>;
export type UpsertUserMutationResult = Apollo.MutationResult<UpsertUserMutation>;
export type UpsertUserMutationOptions = Apollo.BaseMutationOptions<UpsertUserMutation, UpsertUserMutationVariables>;