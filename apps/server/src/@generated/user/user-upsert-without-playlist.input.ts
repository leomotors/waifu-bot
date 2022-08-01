import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPlaylistInput } from './user-update-without-playlist.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaylistInput } from './user-create-without-playlist.input';

@InputType()
export class UserUpsertWithoutPlaylistInput {

    @Field(() => UserUpdateWithoutPlaylistInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlaylistInput)
    update!: UserUpdateWithoutPlaylistInput;

    @Field(() => UserCreateWithoutPlaylistInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaylistInput)
    create!: UserCreateWithoutPlaylistInput;
}
