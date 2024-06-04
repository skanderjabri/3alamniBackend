import {
  IsNotEmpty,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsNumber,
} from 'class-validator';

export class EtudiantDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nom: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  niveauEducation: string;

  @IsOptional()
  @IsString()
  specialite: string;

  @IsOptional()
  telephone: number;

  @IsOptional()
  @IsString()
  adresse: string;

  @IsOptional()
  dateNaissance: Date;

  @IsOptional()
  @IsString()
  genre: string;

  role: string;
}
