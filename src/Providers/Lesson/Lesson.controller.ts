import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { LessonService } from './Lesson.service';
import { LessonDto } from 'src/dto/Lesson.dto';

@Controller('Lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}
  @Post('/CreateLesson')
  async CreateLesson(@Body() body: LessonDto) {
    return this.lessonService.CreateLesson(body);
  }

  @Get('/GetLessonByCoursId/:id')
  GetLessonByCoursId(@Param('id') id: string) {
    return this.lessonService.GetAllLessonByIdCours(id);
  }
  /*@Get('/GetAllCours')
  GetAllEtudiants() {
    return this.coursService.GetAllCours();
  }*/
}
