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

import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';
import { multerConfig } from '../Config/multer.config';
@Controller('users')
export class UsersController {
  private imageDefault = 'MyPharamacieDefaultuser.png';
  constructor(private readonly service: UsersService) {}

  @Post('/CreateUser')
  @UseInterceptors(FileInterceptor('image', multerConfig)) // Use multer for image upload
  async Add(@Body() body: UserDto, @UploadedFile() image: Express.Multer.File) {
    if (image) {
      body.image = image.filename;
    } else {
      body.image = this.imageDefault;
    }

    return this.service.Add(body);
  }
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
