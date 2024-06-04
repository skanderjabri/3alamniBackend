import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './Teacher.model';
import { TeacherDto } from 'src/dto/Teacher.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private TeacherModel: Model<Teacher>,
  ) {}

  //! *************************************************CreateTeacher ************************************************************
  CreateTeacher = async (body: TeacherDto) => {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      body.role = 'enseignant';
      const newEnseignant = await this.TeacherModel.create(body);
      return {
        message: 'ok',
        newEnseignant: newEnseignant,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: 'error',
        newEtudiant: null,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message,
      };
    }
  };
  //! *******************************************GetAllTeacher ***************************************
  GetAllTeacher = async () => {
    try {
      const Enseignants = await this.TeacherModel.find();
      return {
        message: 'ok',
        Enseignants: Enseignants,
        count: Enseignants.length,
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
