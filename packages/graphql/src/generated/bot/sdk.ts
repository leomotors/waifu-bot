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

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Music = {
  __typename?: 'Music';
  _count: MusicCount;
  authorChannelUrl: Scalars['String'];
  authorName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  lengthSeconds: Scalars['Int'];
  likes: Scalars['Int'];
  playlist?: Maybe<Array<Playlist>>;
  shortDescription: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  videoId: Scalars['ID'];
  viewCount: Scalars['Int'];
};

export type MusicCount = {
  __typename?: 'MusicCount';
  playlist: Scalars['Int'];
};

export type MusicCreateInput = {
  authorChannelUrl: Scalars['String'];
  authorName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lengthSeconds: Scalars['Int'];
  likes: Scalars['Int'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutMusicInput>;
  shortDescription: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoId: Scalars['String'];
  viewCount: Scalars['Int'];
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lengthSeconds: Scalars['Int'];
  likes: Scalars['Int'];
  shortDescription: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoId: Scalars['String'];
  viewCount: Scalars['Int'];
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
  createdAt?: InputMaybe<DateTimeFilter>;
  lengthSeconds?: InputMaybe<IntFilter>;
  likes?: InputMaybe<IntFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  thumbnailUrl?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoId?: InputMaybe<StringFilter>;
  viewCount?: InputMaybe<IntFilter>;
};

export type MusicUpdateManyMutationInput = {
  authorChannelUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lengthSeconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  videoId?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lengthSeconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  videoId?: InputMaybe<StringFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  lengthSeconds?: InputMaybe<IntFilter>;
  likes?: InputMaybe<IntFilter>;
  playlist?: InputMaybe<PlaylistListRelationFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  thumbnailUrl?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoId?: InputMaybe<StringFilter>;
  viewCount?: InputMaybe<IntFilter>;
};

export type MusicWhereUniqueInput = {
  videoId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMusicToPlaylist: Music;
  createMusic: Music;
  createPlaylist: Playlist;
  createProfile: Profile;
  createTodoItem: TodoItem;
  createTodoList: TodoList;
  createUser: User;
  createUserPlaylist: Playlist;
  generateToken: AccessToken;
  removeMusicFromPlaylist: Music;
  updateUser: User;
  upsertUser: User;
};


export type MutationAddMusicToPlaylistArgs = {
  playlistId: Scalars['Int'];
  url: Scalars['String'];
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


export type MutationCreateTodoItemArgs = {
  data: TodoItemCreateInput;
};


export type MutationCreateTodoListArgs = {
  data: TodoListCreateInput;
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


export type MutationRemoveMusicFromPlaylistArgs = {
  musicId: Scalars['String'];
  playlistId: Scalars['Int'];
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

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
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
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  music?: Maybe<Array<Music>>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PlaylistCount = {
  __typename?: 'PlaylistCount';
  music: Scalars['Int'];
};

export type PlaylistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<MusicCreateNestedManyWithoutPlaylistInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutPlaylistInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlaylistCreateManyOwnerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutPlaylistInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlaylistCreateWithoutOwnerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  music?: InputMaybe<MusicCreateNestedManyWithoutPlaylistInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  music?: InputMaybe<MusicOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PlaylistScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId',
  UpdatedAt = 'updatedAt'
}

export type PlaylistScalarWhereInput = {
  AND?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  OR?: InputMaybe<Array<PlaylistScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PlaylistUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  music?: InputMaybe<MusicUpdateManyWithoutPlaylistNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  music?: InputMaybe<MusicListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PlaylistWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Profile = {
  __typename?: 'Profile';
  avatarUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  lastInteractGuildName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type ProfileCreateInput = {
  avatarUrl: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastInteractGuildName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastInteractGuildName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type ProfileOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  lastInteractGuildName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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
  CreatedAt = 'createdAt',
  LastInteractGuildName = 'lastInteractGuildName',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Username = 'username'
}

export type ProfileUpdateInput = {
  avatarUrl: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastInteractGuildName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserInput = {
  avatarUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastInteractGuildName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  lastInteractGuildName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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
  todoItem: TodoItem;
  todoItems: Array<TodoItem>;
  todoList: TodoList;
  todoLists: Array<TodoList>;
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


export type QueryTodoItemArgs = {
  where: TodoItemWhereUniqueInput;
};


export type QueryTodoItemsArgs = {
  cursor?: InputMaybe<TodoItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoItemWhereInput>;
};


export type QueryTodoListArgs = {
  where: TodoListWhereUniqueInput;
};


export type QueryTodoListsArgs = {
  cursor?: InputMaybe<TodoListWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoListOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoListWhereInput>;
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

export type TodoItem = {
  __typename?: 'TodoItem';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  todoList?: Maybe<TodoList>;
  todoListId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TodoItemCreateInput = {
  color: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
  todoListId: Scalars['ID'];
};

export type TodoItemCreateManyTodoListInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoItemCreateManyTodoListInputEnvelope = {
  data: Array<TodoItemCreateManyTodoListInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TodoItemCreateNestedManyWithoutTodoListInput = {
  connect?: InputMaybe<Array<TodoItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoItemCreateOrConnectWithoutTodoListInput>>;
  create?: InputMaybe<Array<TodoItemCreateWithoutTodoListInput>>;
  createMany?: InputMaybe<TodoItemCreateManyTodoListInputEnvelope>;
};

export type TodoItemCreateOrConnectWithoutTodoListInput = {
  create: TodoItemCreateWithoutTodoListInput;
  where: TodoItemWhereUniqueInput;
};

export type TodoItemCreateWithoutTodoListInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoItemListRelationFilter = {
  every?: InputMaybe<TodoItemWhereInput>;
  none?: InputMaybe<TodoItemWhereInput>;
  some?: InputMaybe<TodoItemWhereInput>;
};

export type TodoItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TodoItemOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  todoList?: InputMaybe<TodoListOrderByWithRelationInput>;
  todoListId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TodoItemScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  TodoListId = 'todoListId',
  UpdatedAt = 'updatedAt'
}

export type TodoItemScalarWhereInput = {
  AND?: InputMaybe<Array<TodoItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<TodoItemScalarWhereInput>>;
  OR?: InputMaybe<Array<TodoItemScalarWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  todoListId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoItemUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoItemUpdateManyWithWhereWithoutTodoListInput = {
  data: TodoItemUpdateManyMutationInput;
  where: TodoItemScalarWhereInput;
};

export type TodoItemUpdateManyWithoutTodoListNestedInput = {
  connect?: InputMaybe<Array<TodoItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoItemCreateOrConnectWithoutTodoListInput>>;
  create?: InputMaybe<Array<TodoItemCreateWithoutTodoListInput>>;
  createMany?: InputMaybe<TodoItemCreateManyTodoListInputEnvelope>;
  delete?: InputMaybe<Array<TodoItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TodoItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TodoItemWhereUniqueInput>>;
  set?: InputMaybe<Array<TodoItemWhereUniqueInput>>;
  update?: InputMaybe<Array<TodoItemUpdateWithWhereUniqueWithoutTodoListInput>>;
  updateMany?: InputMaybe<Array<TodoItemUpdateManyWithWhereWithoutTodoListInput>>;
  upsert?: InputMaybe<Array<TodoItemUpsertWithWhereUniqueWithoutTodoListInput>>;
};

export type TodoItemUpdateWithWhereUniqueWithoutTodoListInput = {
  data: TodoItemUpdateWithoutTodoListInput;
  where: TodoItemWhereUniqueInput;
};

export type TodoItemUpdateWithoutTodoListInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoItemUpsertWithWhereUniqueWithoutTodoListInput = {
  create: TodoItemCreateWithoutTodoListInput;
  update: TodoItemUpdateWithoutTodoListInput;
  where: TodoItemWhereUniqueInput;
};

export type TodoItemWhereInput = {
  AND?: InputMaybe<Array<TodoItemWhereInput>>;
  NOT?: InputMaybe<Array<TodoItemWhereInput>>;
  OR?: InputMaybe<Array<TodoItemWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  todoList?: InputMaybe<TodoListRelationFilter>;
  todoListId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TodoList = {
  __typename?: 'TodoList';
  _count: TodoListCount;
  collaborators?: Maybe<Array<User>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  todoItems?: Maybe<Array<TodoItem>>;
  updatedAt: Scalars['DateTime'];
};

export type TodoListCount = {
  __typename?: 'TodoListCount';
  collaborators: Scalars['Int'];
  todoItems: Scalars['Int'];
};

export type TodoListCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
};

export type TodoListCreateManyOwnerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoListCreateManyOwnerInputEnvelope = {
  data: Array<TodoListCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TodoListCreateNestedManyWithoutCollaboratorsInput = {
  connect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoListCreateOrConnectWithoutCollaboratorsInput>>;
  create?: InputMaybe<Array<TodoListCreateWithoutCollaboratorsInput>>;
};

export type TodoListCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoListCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<TodoListCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<TodoListCreateManyOwnerInputEnvelope>;
};

export type TodoListCreateOrConnectWithoutCollaboratorsInput = {
  create: TodoListCreateWithoutCollaboratorsInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListCreateOrConnectWithoutOwnerInput = {
  create: TodoListCreateWithoutOwnerInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListCreateWithoutCollaboratorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTodoListsOwnedInput;
  todoItems?: InputMaybe<TodoItemCreateNestedManyWithoutTodoListInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoListCreateWithoutOwnerInput = {
  collaborators?: InputMaybe<UserCreateNestedManyWithoutTodoListsCollaboratedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  todoItems?: InputMaybe<TodoItemCreateNestedManyWithoutTodoListInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoListListRelationFilter = {
  every?: InputMaybe<TodoListWhereInput>;
  none?: InputMaybe<TodoListWhereInput>;
  some?: InputMaybe<TodoListWhereInput>;
};

export type TodoListOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TodoListOrderByWithRelationInput = {
  collaborators?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  todoItems?: InputMaybe<TodoItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TodoListRelationFilter = {
  is?: InputMaybe<TodoListWhereInput>;
  isNot?: InputMaybe<TodoListWhereInput>;
};

export enum TodoListScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId',
  UpdatedAt = 'updatedAt'
}

export type TodoListScalarWhereInput = {
  AND?: InputMaybe<Array<TodoListScalarWhereInput>>;
  NOT?: InputMaybe<Array<TodoListScalarWhereInput>>;
  OR?: InputMaybe<Array<TodoListScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoListUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoListUpdateManyWithWhereWithoutCollaboratorsInput = {
  data: TodoListUpdateManyMutationInput;
  where: TodoListScalarWhereInput;
};

export type TodoListUpdateManyWithWhereWithoutOwnerInput = {
  data: TodoListUpdateManyMutationInput;
  where: TodoListScalarWhereInput;
};

export type TodoListUpdateManyWithoutCollaboratorsNestedInput = {
  connect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoListCreateOrConnectWithoutCollaboratorsInput>>;
  create?: InputMaybe<Array<TodoListCreateWithoutCollaboratorsInput>>;
  delete?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TodoListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  set?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  update?: InputMaybe<Array<TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput>>;
  updateMany?: InputMaybe<Array<TodoListUpdateManyWithWhereWithoutCollaboratorsInput>>;
  upsert?: InputMaybe<Array<TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput>>;
};

export type TodoListUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoListCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<TodoListCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<TodoListCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TodoListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  set?: InputMaybe<Array<TodoListWhereUniqueInput>>;
  update?: InputMaybe<Array<TodoListUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<TodoListUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<TodoListUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput = {
  data: TodoListUpdateWithoutCollaboratorsInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListUpdateWithWhereUniqueWithoutOwnerInput = {
  data: TodoListUpdateWithoutOwnerInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListUpdateWithoutCollaboratorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput>;
  todoItems?: InputMaybe<TodoItemUpdateManyWithoutTodoListNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoListUpdateWithoutOwnerInput = {
  collaborators?: InputMaybe<UserUpdateManyWithoutTodoListsCollaboratedNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  todoItems?: InputMaybe<TodoItemUpdateManyWithoutTodoListNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput = {
  create: TodoListCreateWithoutCollaboratorsInput;
  update: TodoListUpdateWithoutCollaboratorsInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListUpsertWithWhereUniqueWithoutOwnerInput = {
  create: TodoListCreateWithoutOwnerInput;
  update: TodoListUpdateWithoutOwnerInput;
  where: TodoListWhereUniqueInput;
};

export type TodoListWhereInput = {
  AND?: InputMaybe<Array<TodoListWhereInput>>;
  NOT?: InputMaybe<Array<TodoListWhereInput>>;
  OR?: InputMaybe<Array<TodoListWhereInput>>;
  collaborators?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
  todoItems?: InputMaybe<TodoItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoListWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accessToken?: Maybe<AccessToken>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  playlist?: Maybe<Array<Playlist>>;
  profile?: Maybe<Profile>;
  todoListsCollaborated?: Maybe<Array<TodoList>>;
  todoListsOwned?: Maybe<Array<TodoList>>;
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  playlist: Scalars['Int'];
  todoListsCollaborated: Scalars['Int'];
  todoListsOwned: Scalars['Int'];
};

export type UserCreateInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  profile?: InputMaybe<ProfileCreateWithoutUserInput>;
  todoListsCollaborated?: InputMaybe<TodoListCreateNestedManyWithoutCollaboratorsInput>;
  todoListsOwned?: InputMaybe<TodoListCreateNestedManyWithoutOwnerInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedManyWithoutTodoListsCollaboratedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTodoListsCollaboratedInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTodoListsCollaboratedInput>>;
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

export type UserCreateNestedOneWithoutTodoListsOwnedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTodoListsOwnedInput>;
  create?: InputMaybe<UserCreateWithoutTodoListsOwnedInput>;
};

export type UserCreateOrConnectWithoutPlaylistInput = {
  create: UserCreateWithoutPlaylistInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTodoListsCollaboratedInput = {
  create: UserCreateWithoutTodoListsCollaboratedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTodoListsOwnedInput = {
  create: UserCreateWithoutTodoListsOwnedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPlaylistInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  todoListsCollaborated?: InputMaybe<TodoListCreateNestedManyWithoutCollaboratorsInput>;
  todoListsOwned?: InputMaybe<TodoListCreateNestedManyWithoutOwnerInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProfileInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  todoListsCollaborated?: InputMaybe<TodoListCreateNestedManyWithoutCollaboratorsInput>;
  todoListsOwned?: InputMaybe<TodoListCreateNestedManyWithoutOwnerInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTodoListsCollaboratedInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  todoListsOwned?: InputMaybe<TodoListCreateNestedManyWithoutOwnerInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTodoListsOwnedInput = {
  accessToken?: InputMaybe<AccessTokenCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  playlist?: InputMaybe<PlaylistCreateNestedManyWithoutOwnerInput>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  todoListsCollaborated?: InputMaybe<TodoListCreateNestedManyWithoutCollaboratorsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accessToken?: InputMaybe<AccessTokenOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playlist?: InputMaybe<PlaylistOrderByRelationAggregateInput>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  todoListsCollaborated?: InputMaybe<TodoListOrderByRelationAggregateInput>;
  todoListsOwned?: InputMaybe<TodoListOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserUpdateInput = {
  accessToken?: InputMaybe<AccessTokenUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playlist?: InputMaybe<PlaylistUpdateManyWithoutOwnerNestedInput>;
  profile?: InputMaybe<ProfileUpdateInput>;
  todoListsCollaborated?: InputMaybe<TodoListUpdateManyWithoutCollaboratorsNestedInput>;
  todoListsOwned?: InputMaybe<TodoListUpdateManyWithoutOwnerNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutTodoListsCollaboratedNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTodoListsCollaboratedInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTodoListsCollaboratedInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput>>;
};

export type UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTodoListsOwnedInput>;
  create?: InputMaybe<UserCreateWithoutTodoListsOwnedInput>;
  update?: InputMaybe<UserUpdateWithoutTodoListsOwnedInput>;
  upsert?: InputMaybe<UserUpsertWithoutTodoListsOwnedInput>;
};

export type UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput = {
  data: UserUpdateWithoutTodoListsCollaboratedInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutTodoListsCollaboratedInput = {
  accessToken?: InputMaybe<AccessTokenUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playlist?: InputMaybe<PlaylistUpdateManyWithoutOwnerNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  todoListsOwned?: InputMaybe<TodoListUpdateManyWithoutOwnerNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTodoListsOwnedInput = {
  accessToken?: InputMaybe<AccessTokenUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playlist?: InputMaybe<PlaylistUpdateManyWithoutOwnerNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  todoListsCollaborated?: InputMaybe<TodoListUpdateManyWithoutCollaboratorsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertInput = {
  id: Scalars['String'];
  profile: ProfileUpdateInput;
};

export type UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput = {
  create: UserCreateWithoutTodoListsCollaboratedInput;
  update: UserUpdateWithoutTodoListsCollaboratedInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutTodoListsOwnedInput = {
  create: UserCreateWithoutTodoListsOwnedInput;
  update: UserUpdateWithoutTodoListsOwnedInput;
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
  todoListsCollaborated?: InputMaybe<TodoListListRelationFilter>;
  todoListsOwned?: InputMaybe<TodoListListRelationFilter>;
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

export type AddMusicToPlaylistMutationVariables = Exact<{
  url: Scalars['String'];
  playlistId: Scalars['Int'];
}>;


export type AddMusicToPlaylistMutation = { __typename?: 'Mutation', addMusicToPlaylist: { __typename?: 'Music', videoId: string, title: string, shortDescription: string, lengthSeconds: number, viewCount: number, authorName: string, authorChannelUrl: string, thumbnailUrl: string, likes: number } };

export type RemoveMusicFromPlaylistMutationVariables = Exact<{
  playlistId: Scalars['Int'];
  musicId: Scalars['String'];
}>;


export type RemoveMusicFromPlaylistMutation = { __typename?: 'Mutation', removeMusicFromPlaylist: { __typename?: 'Music', videoId: string } };

export type GetMyPlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPlaylistsQuery = { __typename?: 'Query', me: { __typename?: 'User', playlist?: Array<{ __typename?: 'Playlist', id: string, name: string, description?: string | null, _count: { __typename?: 'PlaylistCount', music: number } }> | null } };

export type GetPlaylistQueryVariables = Exact<{
  where: PlaylistWhereUniqueInput;
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist?: { __typename?: 'Playlist', id: string, name: string, description?: string | null, ownerId: string, music?: Array<{ __typename?: 'Music', videoId: string, title: string, shortDescription: string, lengthSeconds: number, viewCount: number, authorName: string, authorChannelUrl: string, thumbnailUrl: string, likes: number, createdAt: any, updatedAt: any }> | null } | null };

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
export const RemoveMusicFromPlaylistDocument = gql`
    mutation removeMusicFromPlaylist($playlistId: Int!, $musicId: String!) {
  removeMusicFromPlaylist(playlistId: $playlistId, musicId: $musicId) {
    videoId
  }
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
export const GetPlaylistDocument = gql`
    query getPlaylist($where: PlaylistWhereUniqueInput!) {
  playlist(where: $where) {
    id
    name
    description
    ownerId
    music {
      videoId
      title
      shortDescription
      lengthSeconds
      viewCount
      authorName
      authorChannelUrl
      thumbnailUrl
      likes
      createdAt
      updatedAt
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
    addMusicToPlaylist(variables: AddMusicToPlaylistMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddMusicToPlaylistMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddMusicToPlaylistMutation>(AddMusicToPlaylistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addMusicToPlaylist', 'mutation');
    },
    removeMusicFromPlaylist(variables: RemoveMusicFromPlaylistMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMusicFromPlaylistMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveMusicFromPlaylistMutation>(RemoveMusicFromPlaylistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeMusicFromPlaylist', 'mutation');
    },
    getMyPlaylists(variables?: GetMyPlaylistsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyPlaylistsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyPlaylistsQuery>(GetMyPlaylistsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMyPlaylists', 'query');
    },
    getPlaylist(variables: GetPlaylistQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlaylistQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlaylistQuery>(GetPlaylistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlaylist', 'query');
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