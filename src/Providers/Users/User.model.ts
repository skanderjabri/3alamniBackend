import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['etudiant', 'enseignant', 'admin'] })
  role: string;

  @Prop({ default: 0 })
  is_blocked: number;

  @Prop({ default: 0 })
  is_verified: number;
}

export const UserModel = SchemaFactory.createForClass(User);
