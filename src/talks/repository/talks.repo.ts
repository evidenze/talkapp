import { DataSource, DeleteResult, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Talks } from '../entity/talks.entity';
import { TalksInterface } from '../interface/talks.interface';

@Injectable()
export class TalksRepository extends Repository<Talks> {
  constructor(dataSource: DataSource) {
    super(Talks, dataSource.createEntityManager());
  }

  async getAllTalks(): Promise<Talks[]> {
    return await this.find();
  }

  /**
   * Get a single talk
   *
   * @param talkId
   * @returns {Promise<Talks>}
   */
  async getSingleTalk(talkId: string): Promise<Talks> {
    return await this.findOneBy({ id: talkId });
  }

  /**
   * Save new talk
   *
   * @param talkDetails
   * @returns {Promise<Talks>}
   */
  async saveNewTalk(talkDetails: TalksInterface): Promise<Talks> {
    return await this.save(talkDetails);
  }

  /**
   * Delete a talk
   *
   * @param id
   * @returns {Promise<DeleteResult>}
   */
  async deleteATalk(talkId: string): Promise<DeleteResult> {
    return await this.delete(talkId);
  }
}
