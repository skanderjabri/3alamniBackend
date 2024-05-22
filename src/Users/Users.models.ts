import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  nom: string;
  @Prop({ required: true })
  prenom: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({})
  tlf: string;
  @Prop({})
  adresse: string;
  @Prop({ default: 'user' })
  role: string;
  @Prop({ default: '' })
  image: string;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop({ default: Date.now })
  updatedAt: Date;
  @Prop({ default: '0' })
  is_verified: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
