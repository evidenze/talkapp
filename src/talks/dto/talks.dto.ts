import { IsNotEmpty } from 'class-validator';

export class TalksDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  speaker: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  userId: string;
}
