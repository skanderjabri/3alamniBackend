import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonModel } from './Lesson.model';
import { LessonController } from './Lesson.controller';
import { LessonService } from './Lesson.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonModel }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonModel }]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
