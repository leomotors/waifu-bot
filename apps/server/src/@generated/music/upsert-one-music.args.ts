import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Type } from 'class-transformer';
import { MusicCreateInput } from './music-create.input';
import { MusicUpdateInput } from './music-update.input';

@ArgsType()
export class UpsertOneMusicArgs {

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;

    @Field(() => MusicCreateInput, {nullable:false})
    @Type(() => MusicCreateInput)
    create!: MusicCreateInput;

    @Field(() => MusicUpdateInput, {nullable:false})
    @Type(() => MusicUpdateInput)
    update!: MusicUpdateInput;
}
