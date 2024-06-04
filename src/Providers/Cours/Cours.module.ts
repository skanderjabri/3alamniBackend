import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursService } from './Cours.service';
import { CoursController } from './Cours.controller';
import { CoursModel, Cours } from './Cours.model';
import { LessonModule } from '../Lesson/Lesson.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cours.name, schema: CoursModel }]),
    LessonModule,
  ],

  controllers: [CoursController],
  providers: [CoursService],
})
export class CoursModule {}
