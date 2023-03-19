import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class AccessToken {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    issued!: Date;

    @Field(() => Date, {nullable:false})
    expire!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => User, {nullable:false})
    user?: User;
}
