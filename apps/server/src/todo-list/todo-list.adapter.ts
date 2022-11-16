import { Injectable } from "@nestjs/common";

import { CreateOneTodoListArgs as PrismaCreateOneTodoListArgs } from "@generated/todo-list/create-one-todo-list.args";
import { User } from "@generated/user/user.model";

import {
  CreateOneTodoListAdminArgs,
  CreateOneTodoListArgs,
} from "./dto/todo-list.dto";

@Injectable()
export class TodoListAdapter {
  createOneTodoList(
    args: CreateOneTodoListAdminArgs
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

  createOneTodoListUser(
    args: CreateOneTodoListArgs,
    user: User
  ): PrismaCreateOneTodoListArgs {
    return {
      data: {
        ...args.data,
        owner: {
          connect: {
            id: user.id,
          },
        },
      },
    };
  }
}
