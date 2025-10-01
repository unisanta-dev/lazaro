import type { User } from "../models/User";
import type { UserRepository } from "../repositories/UserRepository";

// Implementação mock simples
export class MockUserRepository implements UserRepository {
  private users: User[] = [
    { id: "1", name: "Luan Calasans", email: "luancalasans23@gmail.com" },
    { id: "2", name: "Andreas William", email: "and5reas.porcel@hotmail.com" },
  ];

  async findAll(): Promise<User[]> {
    return [...this.users];
  }
}
