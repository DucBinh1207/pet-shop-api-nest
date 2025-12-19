import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, Db, Collection } from 'mongodb';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../users/entities/user.entity';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;
  private db: Db;

  constructor(private config: ConfigService) {}

  async onModuleInit() {
    const uri = this.config.get<string>('mongo.uri');
    const dbName = this.config.get<string>('mongo.dbName');

    if (!uri || !dbName) {
      throw new Error('Mongo config missing');
    }

    this.client = new MongoClient(uri);
    await this.client.connect();
    this.db = this.client.db(dbName);

    console.log('MongoDB connected');
  }

  users(): Collection<UserEntity> {
    return this.db.collection<UserEntity>('users');
  }

  async onModuleDestroy() {
    await this.client.close();
  }
}
