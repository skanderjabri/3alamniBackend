import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Etudiant } from './etudiant.model';
import { EtudiantDto } from 'src/dto/Etudiant.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EtudiantService {
  constructor(
    @InjectModel(Etudiant.name) private etudiantModel: Model<Etudiant>,
  ) {}

  //! *************************************************CreateEtudiant ************************************************************
  CreateEtudiant = async (body: EtudiantDto) => {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      body.role = 'etudiant';
      const newEtudiant = await this.etudiantModel.create(body);
      return {
        message: 'ok',
        newEtudiant: newEtudiant,
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
  //! *******************************************GetAllEtudiants ***************************************
  GetAllEtudiants = async () => {
    try {
      const etudiants = await this.etudiantModel.find();
      return {
        message: 'ok',
        etudiants: etudiants,
        count: etudiants.length,
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
