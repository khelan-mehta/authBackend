import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { usersProviders } from '../services/users.provider';
import { DatabaseModule } from './database.module';
import { DiaryController } from '../controllers/diary.controller';
import { CalendarController } from '../controllers/calender.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../database/schemas/user.schema';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '../services/jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    UsersController,
    DiaryController,
    CalendarController,
    AuthController,
  ],
  providers: [UsersService, AuthService, JwtService, ...usersProviders],
})
export class UsersModule {}
