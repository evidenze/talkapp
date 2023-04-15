export interface TalksInterface {
  title: string;
  description: string;
  speaker: string;
  date: Date;
  time: string;
  location: string;
  userId: string;
}

export interface TalkAttendeeInterface {
  talkId: string;
  userId: string;
}
