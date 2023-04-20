import { IsNotEmpty, IsOptional } from 'class-validator';

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

  @IsOptional()
  userId: string;
}
