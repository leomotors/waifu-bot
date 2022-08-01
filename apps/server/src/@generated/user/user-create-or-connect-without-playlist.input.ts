import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaylistInput } from './user-create-without-playlist.input';

@InputType()
export class UserCreateOrConnectWithoutPlaylistInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPlaylistInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaylistInput)
    create!: UserCreateWithoutPlaylistInput;
}
