import {
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsString,
  IsObject,
  IsOptional,
} from 'class-validator';
import { Types } from 'mongoose';

export class ContenuDto {
  @IsNotEmpty()
  contenu: any;

  @IsNotEmpty()
  @IsEnum(['titre', 'paragraphe', 'image', 'code', 'liste', 'tableau','phrase'])
  type: string;

  ordre: number;

  @IsNotEmpty()
  @IsString()
  lessonId: Types.ObjectId;
}
