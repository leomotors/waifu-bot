import { ArgsType, Field, ID, InputType, OmitType } from "@nestjs/graphql";

import { TodoItemCreateInput as PrismaTodoItemCreateInput } from "@generated/todo-item/todo-item-create.input";

@InputType()
export class TodoItemCreateInput extends OmitType(PrismaTodoItemCreateInput, [
  "createdAt",
  "updatedAt",
  "todoList",
]) {
  @Field(() => ID)
  todoListId!: number;
}

@ArgsType()
export class CreateOneTodoItemArgs {
  @Field(() => TodoItemCreateInput)
  data!: TodoItemCreateInput;
}
