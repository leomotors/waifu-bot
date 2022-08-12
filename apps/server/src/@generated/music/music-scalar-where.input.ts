import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MusicScalarWhereInput {

    @Field(() => [MusicScalarWhereInput], {nullable:true})
    AND?: Array<MusicScalarWhereInput>;

    @Field(() => [MusicScalarWhereInput], {nullable:true})
    OR?: Array<MusicScalarWhereInput>;

    @Field(() => [MusicScalarWhereInput], {nullable:true})
    NOT?: Array<MusicScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    videoId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shortDescription?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lengthSeconds?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    viewCount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorChannelUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    thumbnailUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;
}
