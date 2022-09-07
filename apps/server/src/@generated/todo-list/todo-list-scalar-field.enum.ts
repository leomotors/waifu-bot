import { registerEnumType } from '@nestjs/graphql';

export enum TodoListScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    ownerId = "ownerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TodoListScalarFieldEnum, { name: 'TodoListScalarFieldEnum', description: undefined })
