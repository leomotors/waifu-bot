import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMusicArgs {

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;
}
