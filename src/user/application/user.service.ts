import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain/user.entity';
import {
  USER_REPOSITORY_INTERFACE,
  type UserRepositoryInterface,
} from '../domain/interfaces/user.repository.interface';
import { IUserServiceInterface } from './user.service.interface';

@Injectable()
export class UserService implements IUserServiceInterface {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
