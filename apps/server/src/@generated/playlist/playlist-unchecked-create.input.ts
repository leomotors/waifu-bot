import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MusicUncheckedCreateNestedManyWithoutPlaylistInput } from '../music/music-unchecked-create-nested-many-without-playlist.input';

@InputType()
export class PlaylistUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MusicUncheckedCreateNestedManyWithoutPlaylistInput, {nullable:true})
    music?: MusicUncheckedCreateNestedManyWithoutPlaylistInput;
}
