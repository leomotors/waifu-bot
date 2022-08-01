import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { PlaylistOrderByRelationAggregateInput } from '../playlist/playlist-order-by-relation-aggregate.input';
import { AccessTokenOrderByWithRelationInput } from '../access-token/access-token-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PlaylistOrderByRelationAggregateInput, {nullable:true})
    playlist?: PlaylistOrderByRelationAggregateInput;

    @Field(() => AccessTokenOrderByWithRelationInput, {nullable:true})
    accessToken?: AccessTokenOrderByWithRelationInput;
}
