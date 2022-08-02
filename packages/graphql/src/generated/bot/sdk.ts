import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  expire: Scalars['DateTime'];
  issued: Scalars['DateTime'];
  token: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AccessTokenCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<AccessTokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccessTokenCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AccessTokenCreateWithoutUserInput>;
};

export type AccessTokenCreateOrConnectWithoutUserInput = {
  create: AccessTokenCreateWithoutUserInput;
  where: AccessTokenWhereUniqueInput;
};

export type AccessTokenCreateWithoutUserInput = {
  expire: Scalars['DateTime'];
  issued?: InputMaybe<Scalars['DateTime']>;
  token: Scalars['String'];
};

export type AccessTokenOrderByWithRelationInput = {
  expire?: InputMaybe<SortOrder>;
  issued?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccessTokenRelationFilter = {
  is?: InputMaybe<AccessTokenWhereInput>;
  isNot?: InputMaybe<AccessTokenWhereInput>;
};

export enum AccessTokenScalarFieldEnum {
  Expire = 'expire',
  Issued = 'issued',
  Token = 'token',
  UserId = 'userId'
}

export type AccessTokenUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<AccessTokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccessTokenCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AccessTokenCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AccessTokenUpdateWithoutUserInput>;
  upsert?: InputMaybe<AccessTokenUpsertWithoutUserInput>;
};

export type AccessTokenUpdateWithoutUserInput = {
  expire?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  issued?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccessTokenUpsertWithoutUserInput = {
  create: AccessTokenCreateWithoutUserInput;
  update: AccessTokenUpdateWithoutUserInput;
};

export type AccessTokenWhereInput = {
  AND?: InputMaybe<Array<AccessTokenWhereInput>>;
  NOT?: InputMaybe<Array<AccessTokenWhereInput>>;
  OR?: InputMaybe<Array<AccessTokenWhereInput>>;
  expire?: InputMaybe<DateTimeFilter>;
  issued?: InputMaybe<DateTimeFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccessTokenWhereUniqueInput = {
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Music = {
  __typename?: 'Music';
  _count: MusicCount;
  authorChannelUrl: Scalars['String'];
  authorName: Scalars['String'];
  lengthSeconds: Scalars['String'];
  likes: Scalars['Int'];
  playlist?: Maybe<Array<Playlist>>;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  videoId: Scalars['ID'];
  viewCount: Scalars['String'];
};

export type MusicCount = {
  __typename?: 'MusicCount';
  playlist: Scalars['Int'];
};

export type MusicCreateInput = {
  authorChannelUrl: Scalars['String'];
  authorName: Scalars['String'];
  lengthSeconds: Scalars['String'];
  likes: Scalars['Int'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutMusicInput>;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  videoId: Scalars['String'];
  viewCount: Scalars['String'];
};

export type MusicCreateNestedManyWithoutPlaylistInput = {
  connect?: InputMaybe<Array<MusicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MusicCreateOrConnectWithoutPlaylistInput>>;
  create?: InputMaybe<Array<MusicCreateWithoutPlaylistInput>>;
};

export type MusicCreateOrConnectWithoutPlaylistInput = {
  create: MusicCreateWithoutPlaylistInput;
  where: MusicWhereUniqueInput;
};

export type MusicCreateWithoutPlaylistInput = {
  authorChannelUrl: Scalars['String'];
  authorName: Scalars['String'];
  lengthSeconds: Scalars['String'];
  likes: Scalars['Int'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  videoId: Scalars['String'];
  viewCount: Scalars['String'];
};

export type MusicListRelationFilter = {
  every?: InputMaybe<MusicWhereInput>;
  none?: InputMaybe<MusicWhereInput>;
  some?: InputMaybe<MusicWhereInput>;
};

export type MusicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MusicScalarWhereInput = {
  AND?: InputMaybe<Array<MusicScalarWhereInput>>;
  NOT?: InputMaybe<Array<MusicScalarWhereInput>>;
  OR?: InputMaybe<Array<MusicScalarWhereInput>>;
  authorChannelUrl?: InputMaybe<StringFilter>;
  authorName?: InputMaybe<StringFilter>;
  lengthSeconds?: InputMaybe<StringFilter>;
  likes?: InputMaybe<IntFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  videoId?: InputMaybe<StringFilter>;
  viewCount?: InputMaybe<StringFilter>;
};

export type MusicUpdateManyMutationInput = {
  authorChannelUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lengthSeconds?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  videoId?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MusicUpdateManyWithWhereWithoutPlaylistInput = {
  data: MusicUpdateManyMutationInput;
  where: MusicScalarWhereInput;
};

export type MusicUpdateManyWithoutPlaylistNestedInput = {
  connect?: InputMaybe<Array<MusicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MusicCreateOrConnectWithoutPlaylistInput>>;
  create?: InputMaybe<Array<MusicCreateWithoutPlaylistInput>>;
  delete?: InputMaybe<Array<MusicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MusicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MusicWhereUniqueInput>>;
  set?: InputMaybe<Array<MusicWhereUniqueInput>>;
  update?: InputMaybe<Array<MusicUpdateWithWhereUniqueWithoutPlaylistInput>>;
  updateMany?: InputMaybe<Array<MusicUpdateManyWithWhereWithoutPlaylistInput>>;
  upsert?: InputMaybe<Array<MusicUpsertWithWhereUniqueWithoutPlaylistInput>>;
};

export type MusicUpdateWithWhereUniqueWithoutPlaylistInput = {
  data: MusicUpdateWithoutPlaylistInput;
  where: MusicWhereUniqueInput;
};

export type MusicUpdateWithoutPlaylistInput = {
  authorChannelUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lengthSeconds?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  videoId?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MusicUpsertWithWhereUniqueWithoutPlaylistInput = {
  create: MusicCreateWithoutPlaylistInput;
  update: MusicUpdateWithoutPlaylistInput;
  where: MusicWhereUniqueInput;
};

export type MusicWhereInput = {
  AND?: InputMaybe<Array<MusicWhereInput>>;
  NOT?: InputMaybe<Array<MusicWhereInput>>;
  OR?: InputMaybe<Array<MusicWhereInput>>;
  authorChannelUrl?: InputMaybe<StringFilter>;
  authorName?: InputMaybe<StringFilter>;
  lengthSeconds?: InputMaybe<StringFilter>;
  likes?: InputMaybe<IntFilter>;
  playlist?: InputMaybe<PlaylistListRelationFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  videoId?: InputMaybe<StringFilter>;
  viewCount?: InputMaybe<StringFilter>;
};

export type MusicWhereUniqueInput = {
  videoId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMusic: Music;
  createPlaylist: Playlist;
  createProfile: Profile;
  createUser: User;
  createUserPlaylist: Playlist;
  generateToken: AccessToken;
  updateUser: User;
  upsertUser: User;
};


export type MutationCreateMusicArgs = {
  data: MusicCreateInput;
};


export type MutationCreatePlaylistArgs = {
  data: PlaylistCreateInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserPlaylistArgs = {
  data: PlaylistCreateWithoutOwnerInput;
};


export type MutationGenerateTokenArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  data: UserUpsertInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  _count: PlaylistCount;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  music?: Maybe<Array<Music>>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
};

export type PlaylistCount = {
  __typename?: 'PlaylistCount';
  music: Scalars['Int'];
};

export type PlaylistCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<MusicCreateNestedManyWithoutPlaylistInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutPlaylistInput;
};

export type PlaylistCreateManyOwnerInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type PlaylistCreateManyOwnerInputEnvelope = {
  data: Array<PlaylistCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlaylistCreateNestedManyWithoutMusicInput = {
  connect?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlaylistCreateOrConnectWithoutMusicInput>>;
  create?: InputMaybe<Array<PlaylistCreateWithoutMusicInput>>;
};

export type PlaylistCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlaylistCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<PlaylistCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<PlaylistCreateManyOwnerInputEnvelope>;
};

export type PlaylistCreateOrConnectWithoutMusicInput = {
  create: PlaylistCreateWithoutMusicInput;
  where: PlaylistWhereUniqueInput;
};

export type PlaylistCreateOrConnectWithoutOwnerInput = {
  create: PlaylistCreateWithoutOwnerInput;
  where: PlaylistWhereUniqueInput;
};

export type PlaylistCreateWithoutMusicInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutPlaylistInput;
};

export type PlaylistCreateWithoutOwnerInput = {
  description?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<MusicCreateNestedManyWithoutPlaylistInput>;
  name: Scalars['String'];
};

export type PlaylistListRelationFilter = {
  every?: InputMaybe<PlaylistWhereInput>;
  none?: InputMaybe<PlaylistWhereInput>;
  some?: InputMaybe<PlaylistWhereInput>;
};

export type PlaylistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlaylistOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  music?: InputMaybe<MusicOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
};

export enum PlaylistScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId'
}

export type PlaylistScalarWhereInput = {
  AND?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  OR?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
};

export type PlaylistUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlaylistUpdateManyWithWhereWithoutOwnerInput = {
  data: PlaylistUpdateManyMutationInput;
  where: PlaylistScalarWhereInput;
};

export type PlaylistUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlaylistCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<PlaylistCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<PlaylistCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  set?: InputMaybe<Array<PlaylistWhereUniqueInput>>;
  update?: InputMaybe<Array<PlaylistUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<PlaylistUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<PlaylistUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type PlaylistUpdateWithWhereUniqueWithoutOwnerInput = {
  data: PlaylistUpdateWithoutOwnerInput;
  where: PlaylistWhereUniqueInput;
};

export type PlaylistUpdateWithoutOwnerInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  music?: InputMaybe<MusicUpdateManyWithoutPlaylistNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlaylistUpsertWithWhereUniqueWithoutOwnerInput = {
  create: PlaylistCreateWithoutOwnerInput;
  update: PlaylistUpdateWithoutOwnerInput;
  where: PlaylistWhereUniqueInput;
};

export type PlaylistWhereInput = {
  AND?: InputMaybe<Array<PlaylistWhereInput>>;
  NOT?: InputMaybe<Array<PlaylistWhereInput>>;
  OR?: InputMaybe<Array<PlaylistWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  music?: InputMaybe<MusicListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
};

export type PlaylistWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Profile = {
  __typename?: 'Profile';
  avatarUrl: Scalars['String'];
  lastInteractGuildName: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type ProfileCreateInput = {
  avatarUrl: Scalars['String'];
  lastInteractGuildName: Scalars['String'];
  user: UserCreateNestedOneWithoutProfileInput;
  username: Scalars['String'];
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  avatarUrl: Scalars['String'];
  lastInteractGuildName: Scalars['String'];
  username: Scalars['String'];
};

export type ProfileOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  lastInteractGuildName?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export enum ProfileScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  LastInteractGuildName = 'lastInteractGuildName',
  UserId = 'userId',
  Username = 'username'
}

export type ProfileUpdateInput = {
  avatarUrl: Scalars['String'];
  lastInteractGuildName: Scalars['String'];
  username: Scalars['String'];
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  avatarUrl?: InputMaybe<StringFilter>;
  lastInteractGuildName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type ProfileWhereUniqueInput = {
  userId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  accessTokens: Array<AccessToken>;
  me: User;
  music?: Maybe<Music>;
  musics: Array<Music>;
  playlist?: Maybe<Playlist>;
  playlists: Array<Playlist>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  user?: Maybe<User>;
  users: Array<User>;
  version: Scalars['String'];
  viewerIsGay: Scalars['Boolean'];
};


export type QueryAccessTokensArgs = {
  cursor?: InputMaybe<AccessTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccessTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccessTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccessTokenWhereInput>;
};


export type QueryMusicArgs = {
  where: MusicWhereUniqueInput;
};


export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};


export type QueryPlaylistsArgs = {
  cursor?: InputMaybe<PlaylistWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlaylistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlaylistOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlaylistWhereInput>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accessToken?: Maybe<AccessToken>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  playlist?: Maybe<Array<Playlist>>;
  profile?: Maybe<Profile>;
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  playlist: Scalars['Int'];
};

export type UserCreateInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  profile?: InputMaybe<ProfileCreateWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutPlaylistInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPlaylistInput>;
  create?: InputMaybe<UserCreateWithoutPlaylistInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
};

export type UserCreateOrConnectWithoutPlaylistInput = {
  create: UserCreateWithoutPlaylistInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPlaylistInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProfileInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByWithRelationInput = {
  accessToken?: InputMaybe<AccessTokenOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playlist?: InputMaybe<PlaylistOrderByRelationAggregateInput>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  accessToken?: InputMaybe<AccessTokenUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playlist?: InputMaybe<PlaylistUpdateManyWithoutOwnerNestedInput>;
  profile?: InputMaybe<ProfileUpdateInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertInput = {
  id: Scalars['String'];
  profile: ProfileUpdateInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accessToken?: InputMaybe<AccessTokenRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  playlist?: InputMaybe<PlaylistListRelationFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type GenerateTokenMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GenerateTokenMutation = { __typename?: 'Mutation', generateToken: { __typename?: 'AccessToken', token: string } };

export type UpsertUserMutationVariables = Exact<{
  data: UserUpsertInput;
}>;


export type UpsertUserMutation = { __typename?: 'Mutation', upsertUser: { __typename?: 'User', id: string } };

export type GetVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVersionQuery = { __typename?: 'Query', version: string };

export type GetMyPlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPlaylistsQuery = { __typename?: 'Query', me: { __typename?: 'User', playlist?: Array<{ __typename?: 'Playlist', id: string, name: string, description?: string | null, _count: { __typename?: 'PlaylistCount', music: number } }> | null } };

export type CreateUserPlaylistMutationVariables = Exact<{
  data: PlaylistCreateWithoutOwnerInput;
}>;


export type CreateUserPlaylistMutation = { __typename?: 'Mutation', createUserPlaylist: { __typename?: 'Playlist', id: string } };

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, profile?: { __typename?: 'Profile', username: string, lastInteractGuildName: string, avatarUrl: string } | null, _count: { __typename?: 'UserCount', playlist: number } } };


export const GenerateTokenDocument = gql`
    mutation generateToken($where: UserWhereUniqueInput!) {
  generateToken(where: $where) {
    token
  }
}
    `;
export const UpsertUserDocument = gql`
    mutation upsertUser($data: UserUpsertInput!) {
  upsertUser(data: $data) {
    id
  }
}
    `;
export const GetVersionDocument = gql`
    query getVersion {
  version
}
    `;
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
export const CreateUserPlaylistDocument = gql`
    mutation createUserPlaylist($data: PlaylistCreateWithoutOwnerInput!) {
  createUserPlaylist(data: $data) {
    id
  }
}
    `;
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    generateToken(variables: GenerateTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateTokenMutation>(GenerateTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateToken', 'mutation');
    },
    upsertUser(variables: UpsertUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertUserMutation>(UpsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertUser', 'mutation');
    },
    getVersion(variables?: GetVersionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVersionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVersionQuery>(GetVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getVersion', 'query');
    },
    getMyPlaylists(variables?: GetMyPlaylistsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyPlaylistsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyPlaylistsQuery>(GetMyPlaylistsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMyPlaylists', 'query');
    },
    createUserPlaylist(variables: CreateUserPlaylistMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserPlaylistMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserPlaylistMutation>(CreateUserPlaylistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserPlaylist', 'mutation');
    },
    getMyInfo(variables?: GetMyInfoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyInfoQuery>(GetMyInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMyInfo', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;