import { Module } from "@nestjs/common";

import { TodoListAdapter } from "./todo-list.adapter";
import { TodoListResolver } from "./todo-list.resolver";
import { TodoListService } from "./todo-list.service";

@Module({
    providers: [TodoListResolver, TodoListService, TodoListAdapter],
})
export class TodoListModule {}
