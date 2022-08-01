import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicCreateInput } from './music-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMusicArgs {

    @Field(() => MusicCreateInput, {nullable:false})
    @Type(() => MusicCreateInput)
    data!: MusicCreateInput;
}
