import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PlaylistListRelationFilter } from '../playlist/playlist-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MusicWhereInput {

    @Field(() => [MusicWhereInput], {nullable:true})
    AND?: Array<MusicWhereInput>;

    @Field(() => [MusicWhereInput], {nullable:true})
    OR?: Array<MusicWhereInput>;

    @Field(() => [MusicWhereInput], {nullable:true})
    NOT?: Array<MusicWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    videoId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shortDescription?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    lengthSeconds?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    viewCount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    authorName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorChannelUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    thumbnailUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => PlaylistListRelationFilter, {nullable:true})
    playlist?: PlaylistListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
