import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
  Query,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UsersService } from './User.service';
import { UserDto } from 'src/dto/User.dto';
import { multerConfig } from '../../Config/multer.config';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('/GetAllUsers')
  FindAll() {
    return this.service.FindAll();
  }
  @Get('/:id')
  FindOne(@Param() { id }) {
    return this.service.FindOne(id);
  }
  @Put('/:id')
  Update(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.Update(id, body);
  }
  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete(id);
  }
  @Post('/signin')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return this.service.Login(email, password);
  }
  @Post('/changeEtat')
  async changeEtat(@Body() body: { idUser: string }) {
    const { idUser } = body;
    return this.service.ChangeEtat(idUser);
  }
}
