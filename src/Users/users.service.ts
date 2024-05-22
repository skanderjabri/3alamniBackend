import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/Users/Users.models';
import { UserDto } from 'src/dto/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  Add = async (body: UserDto) => {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      const newUser = await this.userModel.create(body);
      return { message: 'ok', user: newUser, status: HttpStatus.CREATED };
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  FindAll = () => this.userModel.find();

  FindOne = (id: string) => this.userModel.findOne({ _id: id });

  Update = (id: string, body: UserDto) =>
    this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );

  Delete = (id: string) => this.userModel.deleteOne({ _id: id });

  Login = async (email: string, password: string) => {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return { message: 'Utilisateur non trouvé', status: HttpStatus.OK };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { message: 'Mot de passe incorrect', status: HttpStatus.OK };
    }
    return { message: 'ok', user, status: HttpStatus.OK };
  };

  ChangeEtat = async (id: string) => {
    try {
      // Mise à jour du champ "is_verified" à 1
      const updatedUser = await this.userModel.findByIdAndUpdate(
        { _id: id },
        { $set: { is_verified: '1' } },
        { new: true },
      );

      if (!updatedUser) {
        return {
          message: 'Utilisateur non trouvé',
          status: HttpStatus.NOT_FOUND,
        };
      }

      return {
        message: 'ok',
        user: updatedUser,
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: error,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  };
}
