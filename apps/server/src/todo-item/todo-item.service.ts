import { Injectable } from "@nestjs/common";

import { CreateOneTodoItemArgs } from "@generated/todo-item/create-one-todo-item.args";
import { FindManyTodoItemArgs } from "@generated/todo-item/find-many-todo-item.args";
import { FindUniqueTodoItemArgs } from "@generated/todo-item/find-unique-todo-item.args";
import { TodoItem } from "@generated/todo-item/todo-item.model";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class TodoItemService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(args: FindManyTodoItemArgs) {
        return this.prisma.todoItem.findMany(args);
    }

    findUnique(args: FindUniqueTodoItemArgs) {
        return this.prisma.todoItem.findUnique(args);
    }

    create(args: CreateOneTodoItemArgs) {
        return this.prisma.todoItem.create(args);
    }

    todoList(todoItem: TodoItem) {
        return this.prisma.todoItem
            .findUniqueOrThrow({
                where: {
                    id: todoItem.id,
                },
            })
            .todoList();
    }
}
