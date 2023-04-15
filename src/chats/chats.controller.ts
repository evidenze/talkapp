import { Body, Controller, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { NewConversationDto } from './dto/chats.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('/start')
  async startConversation(@Body() conversationDetails: NewConversationDto) {
    return await this.chatsService.startConversation(conversationDetails);
  }
}
