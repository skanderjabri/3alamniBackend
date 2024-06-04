import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contenu } from './Contenu.model';
import { ContenuDto } from 'src/dto/Contenu.dto';
@Injectable()
export class ContenuService {
  constructor(
    @InjectModel(Contenu.name) private ContenuModel: Model<Contenu>,
  ) {}

  //! *************************************************CreateLesson ************************************************************
  CreateContenu = async (body: ContenuDto) => {
    try {
      const existingContenu = await this.ContenuModel.find({
        lessonId: body.lessonId,
      }).sort({ ordre: -1 });

      let newOrder = 1;
      if (existingContenu.length > 0) {
        newOrder = existingContenu[0].ordre + 1;
      }

      body.ordre = newOrder;

      const newContenu = await this.ContenuModel.create(body);

      return {
        message: 'ok',
        newContenu: newContenu,
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
  //! *******************************************GetAllContenusByIdLesson ***************************************
  GetAllContenusByIdLesson = async (id) => {
    try {
      const ContenuListe = await this.ContenuModel.find({
        lessonId: id,
      }).sort({ ordre: 1 });
      return {
        message: 'ok',
        ContenuListe: ContenuListe,
        count: ContenuListe.length,
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
