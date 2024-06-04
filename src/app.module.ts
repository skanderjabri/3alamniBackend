import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Providers/Users/User.module';
import { EtudiantModule } from './Providers/Etudiants/Etudiant.module';
import { TeacherModule } from './Providers/Teacher/Teacher.module';
import { CoursModule } from './Providers/Cours/Cours.module';
import { LessonModule } from './Providers/Lesson/Lesson.module';
import { ContenuModule } from './Providers/Contenus/Contenu.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    EtudiantModule,
    TeacherModule,
    CoursModule,
    LessonModule,
    ContenuModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Spécifiez le chemin vers le dossier public
      serveRoot: '/3alamni/public', // Spécifiez le chemin URL où les fichiers statiques seront servis
    }),
  ],
})
export class AppModule {}
