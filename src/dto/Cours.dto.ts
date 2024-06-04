import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  Max,
  Min,
  IsMongoId,
} from 'class-validator';

export class CoursDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  categorie: string;

  @IsOptional()
  @IsString()
  niveauDifficulte: string;

  @IsOptional()
 // @IsNumber()
  //@Min(0)
  dureeEstimee: number;

  @IsOptional()
  @IsString()
  estCertifie: string;

  @IsOptional()
  //@IsNumber()
  //@Min(0)
  prixInitial: number;

  @IsOptional()
  //@IsNumber()
  // @Min(0)
  Promo: number;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsMongoId()
  enseignantId: string;
}
