import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Cours } from '../Cours/Cours.model';

@Schema({ timestamps: true })
export class Lesson extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({})
  ordre: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Cours' })
  coursId: Cours;
}

export const LessonModel = SchemaFactory.createForClass(Lesson);
