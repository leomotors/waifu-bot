import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { MusicListRelationFilter } from '../music/music-list-relation-filter.input';

@InputType()
export class PlaylistWhereInput {

    @Field(() => [PlaylistWhereInput], {nullable:true})
    AND?: Array<PlaylistWhereInput>;

    @Field(() => [PlaylistWhereInput], {nullable:true})
    OR?: Array<PlaylistWhereInput>;

    @Field(() => [PlaylistWhereInput], {nullable:true})
    NOT?: Array<PlaylistWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    owner?: UserRelationFilter;

    @Field(() => MusicListRelationFilter, {nullable:true})
    music?: MusicListRelationFilter;
}
