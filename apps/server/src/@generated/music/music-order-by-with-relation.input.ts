import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaylistOrderByRelationAggregateInput } from '../playlist/playlist-order-by-relation-aggregate.input';

@InputType()
export class MusicOrderByWithRelationInput {

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
    thumbnailUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PlaylistOrderByRelationAggregateInput, {nullable:true})
    playlist?: PlaylistOrderByRelationAggregateInput;
}
