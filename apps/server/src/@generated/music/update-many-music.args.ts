import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicUpdateManyMutationInput } from './music-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MusicWhereInput } from './music-where.input';

@ArgsType()
export class UpdateManyMusicArgs {

    @Field(() => MusicUpdateManyMutationInput, {nullable:false})
    @Type(() => MusicUpdateManyMutationInput)
    data!: MusicUpdateManyMutationInput;

    @Field(() => MusicWhereInput, {nullable:true})
    @Type(() => MusicWhereInput)
    where?: MusicWhereInput;
}
