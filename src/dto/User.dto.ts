import { IsNotEmpty, IsEmail, IsEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  role: string;
}
