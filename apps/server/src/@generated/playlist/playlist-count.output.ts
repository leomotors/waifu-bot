import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlaylistCount {

    @Field(() => Int, {nullable:false})
    music?: number;
}
