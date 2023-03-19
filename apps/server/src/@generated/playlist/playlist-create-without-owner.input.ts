import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicCreateNestedManyWithoutPlaylistInput } from '../music/music-create-nested-many-without-playlist.input';

@InputType()
export class PlaylistCreateWithoutOwnerInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MusicCreateNestedManyWithoutPlaylistInput, {nullable:true})
    music?: MusicCreateNestedManyWithoutPlaylistInput;
}
