import { registerEnumType } from '@nestjs/graphql';

export enum PlaylistScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    ownerId = "ownerId"
}


registerEnumType(PlaylistScalarFieldEnum, { name: 'PlaylistScalarFieldEnum', description: undefined })
