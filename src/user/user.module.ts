// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { UserRepository } from './infrastructure/user.repository';
import { UserService } from './application/user.service';
import { UserController } from './infrastructure/user.controller';
import { USER_REPOSITORY_INTERFACE } from './domain/interfaces/user.repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: USER_REPOSITORY_INTERFACE, useClass: UserRepository },
  ],
  exports: [UserService],
})
export class UserModule {}
