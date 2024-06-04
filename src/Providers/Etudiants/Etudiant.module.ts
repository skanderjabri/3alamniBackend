import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { EtudiantModel, Etudiant } from './etudiant.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Etudiant.name, schema: EtudiantModel }]),
  ],
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
