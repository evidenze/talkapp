import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '../user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginInterface, RegisterInterface } from './interface/auth.interface';
import { UserRepository } from '../user/repository/user.repo';

@Injectable()
export class AuthService {
  constructor(
    private userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  /**
   * Register a user
   *
   * @param data
   * @returns
   */
  async register(data: RegisterInterface): Promise<any> {
    const user: User = await this.userRepo.getUserByEmail(data.email);

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);

    const newUser: User = await this.userRepo.saveNewUser(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser;

    if (newUser) {
      return {
        message: 'User created successfully',
        data: result,
        token: this.jwtService.sign({
          userId: newUser.id,
          email: newUser.email,
        }),
      };
    }

    throw new InternalServerErrorException();
  }

  /**
   * Login a user
   *
   * @param data
   * @returns {object}
   */
  async login(data: LoginInterface): Promise<any> {
    const user: User = await this.userRepo.getUserByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    return {
      message: 'User logged in successfully',
      token: this.jwtService.sign({
        userId: user.id,
        email: user.email,
      }),
    };
  }
}
