import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TeacherService } from './Teacher.service';
import { TeacherDto } from 'src/dto/Teacher.dto';
import { multerConfig } from '../../Config/multer.config';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('Teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  private imageDefault = '3alamniDefaultImage.png';

  @Post('/CreateTeacher')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async CreateTeacher(
    @Body() body: TeacherDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      body.image = image.filename;
    } else {
      body.image = this.imageDefault;
    }
    return this.teacherService.CreateTeacher(body);
  }
  @Get('/GetAllTeacher')
  GetAllTeacher() {
    return this.teacherService.GetAllTeacher();
  }
}
