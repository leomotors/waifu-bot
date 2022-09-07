import { Injectable } from "@nestjs/common";

import { CreateOneTodoListArgs } from "@generated/todo-list/create-one-todo-list.args";
import { FindManyTodoListArgs } from "@generated/todo-list/find-many-todo-list.args";
import { FindUniqueTodoListArgs } from "@generated/todo-list/find-unique-todo-list.args";
import { TodoList } from "@generated/todo-list/todo-list.model";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class TodoListService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(args: FindManyTodoListArgs) {
        return this.prisma.todoList.findMany(args);
    }

    findUnique(args: FindUniqueTodoListArgs) {
        return this.prisma.todoList.findUnique(args);
    }

    create(args: CreateOneTodoListArgs) {
        return this.prisma.todoList.create(args);
    }

    todoItems(todoList: TodoList) {
        return this.prisma.todoList
            .findUniqueOrThrow({
                where: {
                    id: todoList.id,
                },
            })
            .todoItems();
    }

    owner(todoList: TodoList) {
        return this.prisma.todoList
            .findUniqueOrThrow({
                where: {
                    id: todoList.id,
                },
            })
            .owner();
    }

    collaborators(todoList: TodoList) {
        return this.prisma.todoList
            .findUniqueOrThrow({
                where: {
                    id: todoList.id,
                },
            })
            .collaborators();
    }

    async _count(todoList: TodoList) {
        return (
            await this.prisma.todoList.findUniqueOrThrow({
                where: {
                    id: todoList.id,
                },
                select: {
                    _count: true,
                },
            })
        )._count;
    }
}
