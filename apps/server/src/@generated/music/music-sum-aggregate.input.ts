import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MusicSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
