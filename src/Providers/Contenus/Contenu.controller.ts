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
import { ContenuService } from './Contenu.service';
import { ContenuDto } from 'src/dto/Contenu.dto';

@Controller('Contenu')
export class ContenuController {
  constructor(private readonly contenuService: ContenuService) {}
  @Post('/CreateContenu')
  async CreateContenu(@Body() body: ContenuDto) {
    return this.contenuService.CreateContenu(body);
  }

  @Get('/GetAllContenusByIdLesson/:id')
  GetAllContenusByIdLesson(@Param('id') id: string) {
    return this.contenuService.GetAllContenusByIdLesson(id);
  }
  /* @Get('/GetAllCours')
    GetAllEtudiants() {
      return this.coursService.GetAllCours();
    }*/
}
