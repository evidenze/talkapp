import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Messages } from '../entity/messages.entity';
import { MessagesInterface } from '../interface/chat.interface';

@Injectable()
export class MessagesRepository extends Repository<Messages> {
  constructor(dataSource: DataSource) {
    super(Messages, dataSource.createEntityManager());
  }

  /**
   * Save new message
   *
   * @param messageDetails
   */
  async saveNewMessage(messageDetails: MessagesInterface): Promise<Messages> {
    return await this.save(messageDetails);
  }
}
