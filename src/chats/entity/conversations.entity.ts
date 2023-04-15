import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Conversations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'sender_id', nullable: false })
  senderId: string;

  @Column({ name: 'receiver_id', nullable: false })
  receiverId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
