import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MusicSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;
}
