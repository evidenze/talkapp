import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto, LoginUserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() data: RegisterUserDto) {
    return await this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginUserDto) {
    return await this.authService.login(data);
  }
}
