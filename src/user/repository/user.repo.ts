import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { RegisterInterface } from '../../auth/interface/auth.interface';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async saveNewUser(user: RegisterInterface): Promise<User> {
    return await this.save(user);
  }

  /**
   * Get a single user
   *
   * @param userId
   * @returns {Promise<User>}
   */
  async getAUser(userId: string): Promise<User> {
    return await this.findOneBy({ id: userId });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.findOneBy({ email });
  }
}
