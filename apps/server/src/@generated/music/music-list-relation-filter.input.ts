import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicWhereInput } from './music-where.input';

@InputType()
export class MusicListRelationFilter {

    @Field(() => MusicWhereInput, {nullable:true})
    every?: MusicWhereInput;

    @Field(() => MusicWhereInput, {nullable:true})
    some?: MusicWhereInput;

    @Field(() => MusicWhereInput, {nullable:true})
    none?: MusicWhereInput;
}
