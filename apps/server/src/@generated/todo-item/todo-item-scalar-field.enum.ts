import { registerEnumType } from '@nestjs/graphql';

export enum TodoItemScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    color = "color",
    todoListId = "todoListId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TodoItemScalarFieldEnum, { name: 'TodoItemScalarFieldEnum', description: undefined })
