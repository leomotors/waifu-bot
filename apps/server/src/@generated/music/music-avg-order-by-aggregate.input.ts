import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MusicAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;
}
