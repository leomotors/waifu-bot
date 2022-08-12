import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MusicScalarWhereWithAggregatesInput {

    @Field(() => [MusicScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MusicScalarWhereWithAggregatesInput>;

    @Field(() => [MusicScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MusicScalarWhereWithAggregatesInput>;

    @Field(() => [MusicScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MusicScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    videoId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    shortDescription?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lengthSeconds?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    viewCount?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorChannelUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnailUrl?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likes?: IntWithAggregatesFilter;
}
