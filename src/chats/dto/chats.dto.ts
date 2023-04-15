import { IsNotEmpty } from 'class-validator';

export class ConversationsDto {
  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  receiverId: string;
}

export class MessagesDto {
  @IsNotEmpty()
  conversationId: string;

  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  message: string;
}

export class NewConversationDto {
  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  receiverId: string;

  @IsNotEmpty()
  message: string;
}
