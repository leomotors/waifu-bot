import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MusicCountAggregate } from './music-count-aggregate.output';
import { MusicAvgAggregate } from './music-avg-aggregate.output';
import { MusicSumAggregate } from './music-sum-aggregate.output';
import { MusicMinAggregate } from './music-min-aggregate.output';
import { MusicMaxAggregate } from './music-max-aggregate.output';

@ObjectType()
export class AggregateMusic {

    @Field(() => MusicCountAggregate, {nullable:true})
    _count?: MusicCountAggregate;

    @Field(() => MusicAvgAggregate, {nullable:true})
    _avg?: MusicAvgAggregate;

    @Field(() => MusicSumAggregate, {nullable:true})
    _sum?: MusicSumAggregate;

    @Field(() => MusicMinAggregate, {nullable:true})
    _min?: MusicMinAggregate;

    @Field(() => MusicMaxAggregate, {nullable:true})
    _max?: MusicMaxAggregate;
}
