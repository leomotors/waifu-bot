import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { TodoItem } from "@generated/todo-item/todo-item.model";
import { FindManyTodoListArgs } from "@generated/todo-list/find-many-todo-list.args";
import { FindUniqueTodoListArgs } from "@generated/todo-list/find-unique-todo-list.args";
import { TodoListCount } from "@generated/todo-list/todo-list-count.output";
import { TodoList } from "@generated/todo-list/todo-list.model";
import { User } from "@generated/user/user.model";

import { CreateOneTodoListArgs } from "./dto/todo-list.dto";
import { TodoListAdapter } from "./todo-list.adapter";
import { TodoListService } from "./todo-list.service";

@Resolver(() => TodoList)
export class TodoListResolver {
    constructor(
        private readonly service: TodoListService,
        private readonly adapter: TodoListAdapter
    ) {}

    @Query(() => [TodoList])
    todoLists(@Args() args: FindManyTodoListArgs) {
        return this.service.findMany(args);
    }

    @Query(() => TodoList)
    todoList(@Args() args: FindUniqueTodoListArgs) {
        return this.service.findUnique(args);
    }

    @Mutation(() => TodoList)
    createTodoList(@Args() args: CreateOneTodoListArgs) {
        return this.service.create(this.adapter.createOneTodoList(args));
    }

    @ResolveField(() => [TodoItem])
    todoItems(@Parent() todoList: TodoList) {
        return this.service.todoItems(todoList);
    }

    @ResolveField(() => User)
    owner(@Parent() todoList: TodoList) {
        return this.service.owner(todoList);
    }

    @ResolveField(() => [User])
    collaborators(@Parent() todoList: TodoList) {
        return this.service.collaborators(todoList);
    }

    @ResolveField(() => TodoListCount)
    _count(@Parent() todoList: TodoList) {
        return this.service._count(todoList);
    }
}
