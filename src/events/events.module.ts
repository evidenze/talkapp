import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { ChatsService } from '../chats/chats.service';
import { ConversationsRepository } from 'src/chats/repository/conversations.repo';
import { MessagesRepository } from 'src/chats/repository/messages.repo';

@Module({
  providers: [
    EventsGateway,
    ChatsService,
    ConversationsRepository,
    MessagesRepository,
  ],
})
export class EventsModule {}
