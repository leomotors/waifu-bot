import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MusicAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    lengthSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
