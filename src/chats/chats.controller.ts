import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { NewConversationDto } from './dto/chats.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('chats')
@UseGuards(JwtAuthGuard)
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('/start')
  async startConversation(@Body() conversationDetails: NewConversationDto) {
    return await this.chatsService.startConversation(conversationDetails);
  }
}
