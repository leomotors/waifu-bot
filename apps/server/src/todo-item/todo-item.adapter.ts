import { Injectable } from "@nestjs/common";

import { CreateOneTodoItemArgs as PrismaCreateOneTodoItemArgs } from "@generated/todo-item/create-one-todo-item.args";

import { CreateOneTodoItemArgs } from "./dto/todo-item.dto";

@Injectable()
export class TodoItemAdapter {
    createOneTodoItem(
        args: CreateOneTodoItemArgs
    ): PrismaCreateOneTodoItemArgs {
        const { todoListId, ...data } = args.data;

        return {
            data: {
                ...data,
                todoList: {
                    connect: {
                        id: +todoListId,
                    },
                },
            },
        };
    }
}
