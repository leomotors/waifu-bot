import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaylistCountAggregate } from './playlist-count-aggregate.output';
import { PlaylistAvgAggregate } from './playlist-avg-aggregate.output';
import { PlaylistSumAggregate } from './playlist-sum-aggregate.output';
import { PlaylistMinAggregate } from './playlist-min-aggregate.output';
import { PlaylistMaxAggregate } from './playlist-max-aggregate.output';

@ObjectType()
export class PlaylistGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => PlaylistCountAggregate, {nullable:true})
    _count?: PlaylistCountAggregate;

    @Field(() => PlaylistAvgAggregate, {nullable:true})
    _avg?: PlaylistAvgAggregate;

    @Field(() => PlaylistSumAggregate, {nullable:true})
    _sum?: PlaylistSumAggregate;

    @Field(() => PlaylistMinAggregate, {nullable:true})
    _min?: PlaylistMinAggregate;

    @Field(() => PlaylistMaxAggregate, {nullable:true})
    _max?: PlaylistMaxAggregate;
}
