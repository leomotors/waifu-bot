import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereInput } from './music-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMusicArgs {

    @Field(() => MusicWhereInput, {nullable:true})
    @Type(() => MusicWhereInput)
    where?: MusicWhereInput;
}
