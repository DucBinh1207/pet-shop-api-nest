import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly db: DatabaseService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.db.users().findOne({ email });
  }

  async create(user: UserEntity) {
    return this.db.users().insertOne(user);
  }
}
