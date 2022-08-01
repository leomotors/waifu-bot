import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MusicWhereUniqueInput {

    @Field(() => String, {nullable:true})
    videoId?: string;
}
