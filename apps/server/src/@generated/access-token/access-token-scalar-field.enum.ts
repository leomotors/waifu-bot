import { registerEnumType } from '@nestjs/graphql';

export enum AccessTokenScalarFieldEnum {
    token = "token",
    issued = "issued",
    expire = "expire",
    userId = "userId"
}


registerEnumType(AccessTokenScalarFieldEnum, { name: 'AccessTokenScalarFieldEnum', description: undefined })
