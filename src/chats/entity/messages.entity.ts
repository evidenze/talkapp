import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'sender_id', nullable: false })
  senderId: string;

  @Column({ nullable: false })
  message: string;

  @Column({ name: 'conversation_id', nullable: false })
  conversationId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
