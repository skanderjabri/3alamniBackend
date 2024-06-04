import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Lesson } from '../Lesson/Lesson.model';
@Schema({ timestamps: true })
export class Contenu extends Document {
  @Prop({ type: Object, required: true })
  contenu: any;

  @Prop({
    required: true,
    enum: ['titre', 'paragraphe', 'image', 'code', 'liste', 'tableau','phrase'],
  })
  type: string;

  @Prop({})
  ordre: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Lesson' })
  lessonId: Lesson;

  @Prop({ default: 0 })
  is_blocked: number;

  @Prop({ default: 0 })
  is_verified: number;
}

export const ContenuModel = SchemaFactory.createForClass(Contenu);
