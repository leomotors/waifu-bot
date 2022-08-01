import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MusicUncheckedUpdateManyWithoutPlaylistNestedInput } from '../music/music-unchecked-update-many-without-playlist-nested.input';

@InputType()
export class PlaylistUncheckedUpdateWithoutOwnerInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => MusicUncheckedUpdateManyWithoutPlaylistNestedInput, {nullable:true})
    music?: MusicUncheckedUpdateManyWithoutPlaylistNestedInput;
}
