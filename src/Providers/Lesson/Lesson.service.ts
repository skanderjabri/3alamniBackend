import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './Lesson.model';
import { LessonDto } from 'src/dto/Lesson.dto';
@Injectable()
export class LessonService {
  constructor(@InjectModel(Lesson.name) private LessonModel: Model<Lesson>) {}

  //! *************************************************CreateLesson ************************************************************
  CreateLesson = async (body: LessonDto) => {
    try {
      const existingLessons = await this.LessonModel.find({
        coursId: body.coursId,
      }).sort({ ordre: -1 });

      let newOrder = 1;
      if (existingLessons.length > 0) {
        newOrder = existingLessons[0].ordre + 1;
      }

      body.ordre = newOrder;

      const newLesson = await this.LessonModel.create(body);

      return {
        message: 'ok',
        newLesson: newLesson,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: 'error',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message,
      };
    }
  };
  //! *******************************************GetAllLessonByIdCours ***************************************
  GetAllLessonByIdCours = async (id) => {
    try {
      const LessonListe = await this.LessonModel.find({ coursId: id }).populate(
        'coursId',
      );
      return {
        message: 'ok',
        LessonListe: LessonListe,
        count: LessonListe.length,
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'error',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  };
}
