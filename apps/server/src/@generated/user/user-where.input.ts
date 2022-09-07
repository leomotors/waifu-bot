import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaylistListRelationFilter } from '../playlist/playlist-list-relation-filter.input';
import { AccessTokenRelationFilter } from '../access-token/access-token-relation-filter.input';
import { TodoListListRelationFilter } from '../todo-list/todo-list-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlaylistListRelationFilter, {nullable:true})
    playlist?: PlaylistListRelationFilter;

    @Field(() => AccessTokenRelationFilter, {nullable:true})
    accessToken?: AccessTokenRelationFilter;

    @Field(() => TodoListListRelationFilter, {nullable:true})
    todoListsOwned?: TodoListListRelationFilter;

    @Field(() => TodoListListRelationFilter, {nullable:true})
    todoListsCollaborated?: TodoListListRelationFilter;
}
