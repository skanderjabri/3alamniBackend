import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantDto } from 'src/dto/Etudiant.dto';
import { multerConfig } from '../../Config/multer.config';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('Etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  private imageDefault = '3alamniDefaultImage.png';

  @Post('/CreateEtudiant')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async createEtudiant(
    @Body() body: EtudiantDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      body.image = image.filename;
    } else {
      body.image = this.imageDefault;
    }
    return this.etudiantService.CreateEtudiant(body);
  }
  @Get('/GetAllEtudiants')
  GetAllEtudiants() {
    return this.etudiantService.GetAllEtudiants();
  }
}
