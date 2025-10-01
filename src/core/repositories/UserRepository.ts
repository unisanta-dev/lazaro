import type { User } from "../models/User";

// Interface
export interface UserRepository {
  findAll(): Promise<User[]>;
}
