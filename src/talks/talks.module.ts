import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TalksRepository } from './repository/talks.repo';
import { TalkAttendeesRepository } from './repository/talkAttendees.repo';
import { UserRepository } from '../user/repository/user.repo';

@Module({
  providers: [
    TalksService,
    TalksRepository,
    TalkAttendeesRepository,
    UserRepository,
  ],
  controllers: [TalksController],
})
export class TalksModule {}
