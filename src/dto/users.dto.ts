import { IsNotEmpty, IsEmail, IsEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  prenom: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  tlf: string;

  image: string;

  adresse: string;
}
