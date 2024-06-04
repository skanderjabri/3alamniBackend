import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CoursService } from './Cours.service';
import { CoursDto } from 'src/dto/Cours.dto';
import { multerConfig } from '../../Config/multer.config';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('Cours')
export class CoursController {
  constructor(private readonly coursService: CoursService) {}

  @Post('/CreateCours')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async createEtudiant(
    @Body() body: CoursDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      body.image = image.filename;
    }
    return this.coursService.CreateCours(body);
  }

  @Get('/GetAllCours')
  GetAllEtudiants() {
    return this.coursService.GetAllCours();
  }

  @Get('/GetCoursById/:id')
  getCoursById(@Param('id') id: string) {
    return this.coursService.GetCoursById(id);
  }
}
