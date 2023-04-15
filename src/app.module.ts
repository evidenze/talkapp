import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { TalksModule } from './talks/talks.module';
import { ChatsModule } from './chats/chats.module';
import { EventsModule } from './events/events.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

dotenv.config();

const ORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 8889,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migration', '*.{ts,js}')],
  synchronize: false,
  autoLoadEntities: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ORMConfig),
    TalksModule,
    ChatsModule,
    EventsModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
