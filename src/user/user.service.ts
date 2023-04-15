import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repo';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async fetchUser(userId: string): Promise<any> {
    const user: User = await this.userRepo.getAUser(userId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      message: 'User fetched successfully',
      data: result,
      status: true,
    };
  }
}
