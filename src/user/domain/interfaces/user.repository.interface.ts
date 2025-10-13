import { User } from "../user.entity";

export interface UserRepositoryInterface {
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<void>;
  delete(id: number): Promise<void>;
}
