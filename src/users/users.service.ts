import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  async findByEmail(email: string) {}

  async createUser(data: Partial<User>) {}

  async updateById(id: string, data: Partial<User>) {}
}
