import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class LessonDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  ordre: number;

  @IsNotEmpty()
  @IsMongoId()
  coursId: string;
}
