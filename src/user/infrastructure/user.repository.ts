import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/interfaces/user.repository.interface';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  private repo: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.repo = this.dataSource.getRepository(User);
  }

  async findById(id: number): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async save(user: User): Promise<void> {
    await this.repo.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
