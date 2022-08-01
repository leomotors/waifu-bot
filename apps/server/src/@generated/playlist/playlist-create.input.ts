import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPlaylistInput } from '../user/user-create-nested-one-without-playlist.input';
import { MusicCreateNestedManyWithoutPlaylistInput } from '../music/music-create-nested-many-without-playlist.input';

@InputType()
export class PlaylistCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedOneWithoutPlaylistInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutPlaylistInput;

    @Field(() => MusicCreateNestedManyWithoutPlaylistInput, {nullable:true})
    music?: MusicCreateNestedManyWithoutPlaylistInput;
}
