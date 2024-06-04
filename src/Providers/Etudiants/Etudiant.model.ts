import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserModel } from '../Users/User.model';
@Schema({ timestamps: true })
export class Etudiant extends User {
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
  telephone: number;

  @Prop()
  adresse: string;

  @Prop()
  dateNaissance: Date;

  @Prop()
  genre: string;
}

export const EtudiantModel = UserModel.discriminator(
  'Etudiant',
  SchemaFactory.createForClass(Etudiant),
);
