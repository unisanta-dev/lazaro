import type { User } from "../models/User";
import type { UserRepository } from "../repositories/UserRepository";

// ViewModel
export class UserViewModel {
  private users: User[] = [];
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getUsers(): User[] {
    return this.users;
  }

  async loadUsers(): Promise<void> {
    this.users = await this.userRepository.findAll();
  }
}
