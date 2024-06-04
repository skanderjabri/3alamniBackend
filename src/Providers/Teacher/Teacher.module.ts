import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherService } from './Teacher.service';
import { TeacherController } from './Teacher.controller';
import { TeacherModel, Teacher } from './Teacher.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherModel }]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
