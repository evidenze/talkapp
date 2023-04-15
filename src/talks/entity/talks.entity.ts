import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Talks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, type: 'longtext' })
  description: string;

  @Column({ nullable: false })
  speaker: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  time: string;

  @Column({ nullable: false })
  location: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity()
export class TalkAttendees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'talk_id', nullable: false })
  talkId: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
