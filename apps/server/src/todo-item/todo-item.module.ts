import { Module } from "@nestjs/common";

import { TodoItemAdapter } from "./todo-item.adapter";
import { TodoItemResolver } from "./todo-item.resolver";
import { TodoItemService } from "./todo-item.service";

@Module({
  providers: [TodoItemService, TodoItemResolver, TodoItemAdapter],
})
export class TodoItemModule {}
