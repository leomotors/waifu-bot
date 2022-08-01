import { registerEnumType } from '@nestjs/graphql';

export enum MusicScalarFieldEnum {
    videoId = "videoId",
    title = "title",
    shortDescription = "shortDescription",
    lengthSeconds = "lengthSeconds",
    viewCount = "viewCount",
    authorName = "authorName",
    authorChannelUrl = "authorChannelUrl",
    likes = "likes"
}


registerEnumType(MusicScalarFieldEnum, { name: 'MusicScalarFieldEnum', description: undefined })
