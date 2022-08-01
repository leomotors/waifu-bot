import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPlaylistInput } from '../user/user-create-nested-one-without-playlist.input';

@InputType()
export class PlaylistCreateWithoutMusicInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedOneWithoutPlaylistInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutPlaylistInput;
}
