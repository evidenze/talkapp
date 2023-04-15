import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TalkAttendees } from '../entity/talks.entity';

@Injectable()
export class TalkAttendeesRepository extends Repository<TalkAttendees> {
  constructor(dataSource: DataSource) {
    super(TalkAttendees, dataSource.createEntityManager());
  }

  /**
   * Save new attendee to talk
   *
   * @param talkId
   * @param attendeeId
   * @returns
   */
  async saveNewAttendee(
    talkId: string,
    attendeeId: string,
  ): Promise<TalkAttendees> {
    return await this.save({ talkId, attendeeId });
  }

  /**
   * Get all attendees for a talk
   *
   * @param talkId
   * @returns
   */
  async getAttendees(talkId: string): Promise<TalkAttendees[]> {
    return await this.find({ where: { talkId } });
  }
}
