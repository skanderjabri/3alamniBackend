import { Module } from '@nestjs/common';
import { UsersController } from './User.controller';
import { UsersService } from './User.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, User } from 'src/Providers/Users/User.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
