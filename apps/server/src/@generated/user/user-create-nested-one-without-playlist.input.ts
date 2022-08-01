import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaylistInput } from './user-create-without-playlist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaylistInput } from './user-create-or-connect-without-playlist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPlaylistInput {

    @Field(() => UserCreateWithoutPlaylistInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaylistInput)
    create?: UserCreateWithoutPlaylistInput;

    @Field(() => UserCreateOrConnectWithoutPlaylistInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaylistInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
