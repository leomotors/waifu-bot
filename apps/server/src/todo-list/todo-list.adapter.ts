import { Injectable } from "@nestjs/common";

import { CreateOneTodoListArgs as PrismaCreateOneTodoListArgs } from "@generated/todo-list/create-one-todo-list.args";

import { CreateOneTodoListArgs } from "./dto/todo-list.dto";

@Injectable()
export class TodoListAdapter {
    createOneTodoList(
        args: CreateOneTodoListArgs
    ): PrismaCreateOneTodoListArgs {
        const { ownerId, ...data } = args.data;

        return {
            data: {
                ...data,
                owner: {
                    connect: {
                        id: ownerId,
                    },
                },
            },
        };
    }
}
