import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    userId = "userId",
    username = "username",
    lastInteractGuildName = "lastInteractGuildName",
    avatarUrl = "avatarUrl"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
