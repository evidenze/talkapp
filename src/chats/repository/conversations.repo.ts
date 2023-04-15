import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Conversations } from '../entity/conversations.entity';
import { ConversationsInterface } from '../interface/chat.interface';

@Injectable()
export class ConversationsRepository extends Repository<Conversations> {
  constructor(dataSource: DataSource) {
    super(Conversations, dataSource.createEntityManager());
  }

  /**
   * Save new conversation
   *
   * @param conversationDetails
   */
  async saveNewConversation(
    conversationDetails: ConversationsInterface,
  ): Promise<Conversations> {
    return await this.save(conversationDetails);
  }
}
