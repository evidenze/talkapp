import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ConversationsRepository } from './repository/conversations.repo';
import { MessagesRepository } from './repository/messages.repo';

@Module({
  providers: [ChatsService, ConversationsRepository, MessagesRepository],
  controllers: [ChatsController],
})
export class ChatsModule {}
