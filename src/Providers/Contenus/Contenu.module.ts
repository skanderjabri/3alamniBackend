import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Contenu, ContenuModel } from './Contenu.model';
import { ContenuController } from './Contenu.controller';
import { ContenuService } from './Contenu.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contenu.name, schema: ContenuModel }]),
  ],
  controllers: [ContenuController],
  providers: [ContenuService],
})
export class ContenuModule {}
