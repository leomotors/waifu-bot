import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MusicUpdateManyWithoutPlaylistNestedInput } from '../music/music-update-many-without-playlist-nested.input';

@InputType()
export class PlaylistUpdateWithoutOwnerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => MusicUpdateManyWithoutPlaylistNestedInput, {nullable:true})
    music?: MusicUpdateManyWithoutPlaylistNestedInput;
}
