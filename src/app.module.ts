import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Cambiar por tu host
      port: 5432, // Puerto PostgreSQL
      username: 'postgres', // Usuario DB
      password: '123456789', // Contraseña DB
      database: 'hexaagonal', // Nombre de la DB
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true, // Solo en desarrollo
      logging: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
