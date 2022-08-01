import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class AggregateProfile {

    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: ProfileCountAggregate;

    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: ProfileMaxAggregate;
}
