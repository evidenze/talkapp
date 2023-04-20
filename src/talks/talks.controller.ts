import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksDto } from './dto/talks.dto';
import { User } from '../user/user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('talks')
export class TalksController {
  constructor(private readonly talksService: TalksService) {}

  @Get()
  async getAllTalks() {
    return await this.talksService.getAllTalks();
  }

  /**
   * Create new talk
   *
   * @param talkDetails
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  async createNewTalk(@Body() talkDetails: TalksDto, @User() user: any) {
    return await this.talksService.createNewTalk(talkDetails, user.id);
  }

  /**
   * Add attendee to talk
   *
   * @param talkAttendeeDetails
   */
  @UseGuards(JwtAuthGuard)
  @Post(':talkId/add-attendee')
  async addAttendeeToTalk(@Param('talkId') talkId: string, @User() user: any) {
    return await this.talksService.addAttendeeToTalk(talkId, user.id);
  }

  @Get(':talkId')
  async getSingleTalk(@Param('talkId') talkId: string) {
    return await this.talksService.getSingleTalk(talkId);
  }

  @Get(':talkId/attendees')
  async getAttendees(@Param('talkId') talkId: string) {
    return await this.talksService.getAttendeesForTalk(talkId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':talkId')
  async deleteTalk(@Param('talkId') talkId: string) {
    return await this.talksService.deleteATalk(talkId);
  }
}
