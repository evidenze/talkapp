import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConversationsRepository } from './repository/conversations.repo';
import { MessagesRepository } from './repository/messages.repo';
import {
  ConversationsInterface,
  MessagesInterface,
  NewConversationInterface,
} from './interface/chat.interface';
import { Messages } from './entity/messages.entity';
import { Conversations } from './entity/conversations.entity';

@Injectable()
export class ChatsService {
  constructor(
    private conversationsRepo: ConversationsRepository,
    private messagesRepo: MessagesRepository,
  ) {}

  /**
   * Start a new conversation
   *
   * @param newConversationDetails
   * @returns
   */
  async startConversation(
    newConversationDetails: NewConversationInterface,
  ): Promise<any> {
    const { senderId, receiverId, message } = newConversationDetails;
    const conversationDetails: ConversationsInterface = {
      senderId,
      receiverId,
    };

    // check if user has an existing conversation with the receiver
    const newConservation: Conversations =
      await this.conversationsRepo.saveNewConversation(conversationDetails);

    const messageDetails: MessagesInterface = {
      senderId,
      message,
      conversationId: newConservation.id,
    };

    const newMessage: Messages = await this.messagesRepo.saveNewMessage(
      messageDetails,
    );

    if (newMessage) {
      return {
        status: true,
        message: 'Conversation started',
        data: newMessage,
      };
    }

    throw new InternalServerErrorException();
  }

  /**
   * Send message
   *
   * @param messageDetails
   * @returns {object}
   */
  async sendMessage(messageDetails: MessagesInterface): Promise<any> {
    const newMessage: Messages = await this.messagesRepo.saveNewMessage(
      messageDetails,
    );

    if (newMessage) {
      return {
        status: true,
        message: 'Message sent',
        data: newMessage,
      };
    }

    throw new InternalServerErrorException();
  }
}
