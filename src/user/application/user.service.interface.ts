import { User } from '../domain/user.entity';

export interface IUserServiceInterface {
  getUserById(id: number): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
