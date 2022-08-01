import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistCreateManyOwnerInput } from './playlist-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaylistCreateManyOwnerInputEnvelope {

    @Field(() => [PlaylistCreateManyOwnerInput], {nullable:false})
    @Type(() => PlaylistCreateManyOwnerInput)
    data!: Array<PlaylistCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
