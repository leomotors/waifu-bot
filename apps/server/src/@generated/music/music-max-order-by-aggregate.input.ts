import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MusicMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    videoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortDescription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lengthSeconds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorChannelUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;
}
