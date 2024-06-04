import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Teacher } from '../Teacher/Teacher.model';
@Schema({ timestamps: true })
export class Cours extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  description: string;

  @Prop({})
  categorie: string;

  @Prop({})
  niveauDifficulte: string; // ENUM('débutant', 'intermédiaire', 'avancé')

  @Prop({})
  dureeEstimee: number;

  @Prop({ default: '' })
  estCertifie: string;

  @Prop({ default: 0 })
  prixInitial: number;

  @Prop({ default: 0 })
  Promo: number;

  @Prop({ default: 0 })
  is_blocked: number;

  @Prop({ default: 0 })
  is_verified: number;

  @Prop({})
  image: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Teacher' })
  enseignantId: Teacher;
}

export const CoursModel = SchemaFactory.createForClass(Cours);
