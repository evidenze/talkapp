import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TalksRepository } from './repository/talks.repo';
import { TalkAttendees, Talks } from './entity/talks.entity';
import { TalksInterface } from './interface/talks.interface';
import { TalkAttendeesRepository } from './repository/talkAttendees.repo';
import { DeleteResult } from 'typeorm';
import { UserRepository } from '../user/repository/user.repo';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class TalksService {
  constructor(
    private talksRepo: TalksRepository,
    private talkAttendeesRepo: TalkAttendeesRepository,
    private userRepo: UserRepository,
  ) {}

  /**
   * Get all talks
   *
   * @returns {object}
   */
  async getAllTalks(): Promise<any> {
    const talks: Talks[] = await this.talksRepo.getAllTalks();

    return {
      status: true,
      message: 'All talks',
      data: talks,
    };
  }

  /**
   * Create new talk
   *
   * @param talkDetails
   * @returns {object}
   */
  async createNewTalk(
    talkDetails: TalksInterface,
    userId: string,
  ): Promise<any> {
    const newTalk = {
      ...talkDetails,
      userId,
    };

    const talk: Talks = await this.talksRepo.saveNewTalk(newTalk);

    return {
      status: true,
      message: 'Talk created successfully',
      data: talk,
    };
  }

  /**
   * Get a single talk
   *
   * @param talkId
   * @returns {object}
   */
  async getSingleTalk(talkId: string): Promise<any> {
    const talk: Talks = await this.talksRepo.getSingleTalk(talkId);

    if (!talk) {
      throw new NotFoundException('Talk not found');
    }

    return {
      status: true,
      message: 'Single talk',
      data: talk,
    };
  }

  /**
   * Add attendee to talk
   *
   * @param talkId
   * @param attendeeId
   * @returns {object}
   */
  async addAttendeeToTalk(talkId: string, userId: string): Promise<any> {
    const user: User = await this.userRepo.getAUser(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const talkAttendee: TalkAttendees =
      await this.talkAttendeesRepo.saveNewAttendee(talkId, userId);

    return {
      status: true,
      message: 'Attendee added to talk successfully',
      data: talkAttendee,
    };
  }

  /**
   * Get attendees for a talk
   *
   * @param talkId
   * @returns
   */
  async getAttendeesForTalk(talkId: string): Promise<any> {
    const talk: Talks = await this.talksRepo.getSingleTalk(talkId);

    if (!talk) {
      throw new NotFoundException('Talk not found');
    }

    const attendees: TalkAttendees[] =
      await this.talkAttendeesRepo.getAttendees(talkId);

    const attendeesData: any[] = [];

    for (const attendee of attendees) {
      const attendeeData: User = await this.userRepo.getAUser(attendee.userId);

      attendeesData.push(attendeeData);
    }

    return {
      status: true,
      message: 'Attendees for talk',
      data: attendeesData,
    };
  }

  /**
   * Delete a talk
   *
   * @param talkId
   * @returns {object}
   */
  async deleteATalk(talkId: string): Promise<any> {
    const talk: Talks = await this.talksRepo.getSingleTalk(talkId);

    if (!talk) {
      throw new NotFoundException('Talk not found');
    }

    const deleteTalk: DeleteResult = await this.talksRepo.deleteATalk(talkId);

    if (deleteTalk.affected) {
      return {
        status: true,
        message: 'Talk deleted successfully',
      };
    }

    throw new InternalServerErrorException();
  }
}
