import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";

import { TodoListCreateInput as PrismaTodoListCreateInput } from "@generated/todo-list/todo-list-create.input";

@InputType()
export class TodoListCreateInput extends OmitType(PrismaTodoListCreateInput, [
    "createdAt",
    "updatedAt",
    "collaborators",
    "owner",
    "todoItems",
]) {}

@InputType()
export class TodoListAdminCreateInput extends TodoListCreateInput {
    @Field()
    ownerId!: string;
}

@ArgsType()
export class CreateOneTodoListAdminArgs {
    @Field(() => TodoListAdminCreateInput)
    data!: TodoListAdminCreateInput;
}
@ArgsType()
export class CreateOneTodoListArgs {
    @Field(() => TodoListCreateInput)
    data!: TodoListCreateInput;
}
