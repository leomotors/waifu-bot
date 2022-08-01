import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicCreateManyInput } from './music-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMusicArgs {

    @Field(() => [MusicCreateManyInput], {nullable:false})
    @Type(() => MusicCreateManyInput)
    data!: Array<MusicCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
