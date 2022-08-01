import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicUpdateInput } from './music-update.input';
import { Type } from 'class-transformer';
import { MusicWhereUniqueInput } from './music-where-unique.input';

@ArgsType()
export class UpdateOneMusicArgs {

    @Field(() => MusicUpdateInput, {nullable:false})
    @Type(() => MusicUpdateInput)
    data!: MusicUpdateInput;

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;
}
