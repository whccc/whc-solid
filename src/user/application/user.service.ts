import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/interfaces/user.repository.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
