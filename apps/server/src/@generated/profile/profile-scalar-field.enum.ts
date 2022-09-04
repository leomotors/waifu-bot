import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    userId = "userId",
    username = "username",
    lastInteractGuildName = "lastInteractGuildName",
    avatarUrl = "avatarUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
