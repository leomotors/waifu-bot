import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaylistInput } from './user-create-without-playlist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaylistInput } from './user-create-or-connect-without-playlist.input';
import { UserUpsertWithoutPlaylistInput } from './user-upsert-without-playlist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPlaylistInput } from './user-update-without-playlist.input';

@InputType()
export class UserUpdateOneRequiredWithoutPlaylistNestedInput {

    @Field(() => UserCreateWithoutPlaylistInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaylistInput)
    create?: UserCreateWithoutPlaylistInput;

    @Field(() => UserCreateOrConnectWithoutPlaylistInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaylistInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput;

    @Field(() => UserUpsertWithoutPlaylistInput, {nullable:true})
    @Type(() => UserUpsertWithoutPlaylistInput)
    upsert?: UserUpsertWithoutPlaylistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPlaylistInput, {nullable:true})
    @Type(() => UserUpdateWithoutPlaylistInput)
    update?: UserUpdateWithoutPlaylistInput;
}
