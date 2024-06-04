import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cours } from './Cours.model';
import { CoursDto } from 'src/dto/Cours.dto';
import { Lesson } from '../Lesson/Lesson.model';

@Injectable()
export class CoursService {
  constructor(
    @InjectModel(Cours.name) private CoursModel: Model<Cours>,
    @InjectModel(Lesson.name) private LessonModel: Model<Lesson>,
  ) {}

  //! *************************************************CreateCours ************************************************************
  CreateCours = async (body: CoursDto) => {
    try {
      const newCours = await this.CoursModel.create(body);
      return {
        message: 'ok',
        newCours: newCours,
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

  //! *******************************************GetAllCours ***************************************
  GetAllCours = async () => {
    try {
      const CoursListe = await this.CoursModel.find().populate('enseignantId');

      const CoursAvecLecons = await Promise.all(
        CoursListe.map(async (cours) => {
          const lessonCount = await this.LessonModel.countDocuments({
            coursId: cours._id,
          });
          return {
            ...cours.toObject(),
            lessonCount: lessonCount,
          };
        }),
      );

      return {
        message: 'ok',
        CoursListe: CoursAvecLecons,
        count: CoursAvecLecons.length,
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
  // *******************************************GetCoursById ***************************************

  GetCoursById = async (id) => {
    try {
      const cours = await this.CoursModel.findById(id).populate('enseignantId');
      if (!cours) {
        return {
          message: 'Cours not found',
          status: HttpStatus.NOT_FOUND,
        };
      }

      const lessonCount = await this.LessonModel.countDocuments({
        coursId: cours._id,
      });

      const coursAvecLecons = {
        ...cours.toObject(),
        lessonCount: lessonCount,
      };

      return {
        message: 'ok',
        cours: coursAvecLecons,
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
