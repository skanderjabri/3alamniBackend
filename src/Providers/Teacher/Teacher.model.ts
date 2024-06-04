import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserModel } from '../Users/User.model';
@Schema({ timestamps: true })
export class Teacher extends User {
  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  image: string;

  @Prop()
  niveauEducation: string;

  @Prop()
  specialite: string;

  @Prop()
  experience: string;

  @Prop()
  telephone: number;

  @Prop()
  titreProfessionnel: string;

  @Prop()
  adresse: string;

  @Prop()
  dateNaissance: Date;

  @Prop()
  genre: string;
}

export const TeacherModel = UserModel.discriminator(
  'Teacher',
  SchemaFactory.createForClass(Teacher),
);
