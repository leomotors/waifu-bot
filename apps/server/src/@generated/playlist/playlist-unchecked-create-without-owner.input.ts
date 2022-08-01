import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MusicUncheckedCreateNestedManyWithoutPlaylistInput } from '../music/music-unchecked-create-nested-many-without-playlist.input';

@InputType()
export class PlaylistUncheckedCreateWithoutOwnerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => MusicUncheckedCreateNestedManyWithoutPlaylistInput, {nullable:true})
    music?: MusicUncheckedCreateNestedManyWithoutPlaylistInput;
}
