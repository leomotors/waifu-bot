import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlaylistAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
