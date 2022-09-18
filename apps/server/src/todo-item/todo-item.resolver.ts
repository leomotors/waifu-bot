import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { FindManyTodoItemArgs } from "@generated/todo-item/find-many-todo-item.args";
import { FindUniqueTodoItemArgs } from "@generated/todo-item/find-unique-todo-item.args";
import { TodoItem } from "@generated/todo-item/todo-item.model";
import { TodoList } from "@generated/todo-list/todo-list.model";

import { Permission } from "src/auth/auth.decorator";

import { CreateOneTodoItemArgs } from "./dto/todo-item.dto";
import { TodoItemAdapter } from "./todo-item.adapter";
import { TodoItemService } from "./todo-item.service";

@Resolver(() => TodoItem)
export class TodoItemResolver {
    constructor(
        private readonly service: TodoItemService,
        private readonly adapter: TodoItemAdapter
    ) {}

    @Query(() => [TodoItem])
    todoItems(@Args() args: FindManyTodoItemArgs) {
        return this.service.findMany(args);
    }

    @Query(() => TodoItem, { nullable: true })
    todoItem(@Args() args: FindUniqueTodoItemArgs) {
        return this.service.findUnique(args);
    }

    @Mutation(() => TodoItem)
    @Permission("User")
    createTodoItem(@Args() args: CreateOneTodoItemArgs) {
        return this.service.create(this.adapter.createOneTodoItem(args));
    }

    @ResolveField(() => TodoList)
    todoList(@Parent() todoItem: TodoItem) {
        return this.service.todoList(todoItem);
    }
}
