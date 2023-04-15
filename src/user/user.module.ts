import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repo';

@Module({
  imports: [],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
