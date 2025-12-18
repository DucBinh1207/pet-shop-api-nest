import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;
  private db: Db;

  constructor(private config: ConfigService) {}

  async onModuleInit() {
    const uri = this.config.get<string>('mongo.uri');
    const dbName = this.config.get<string>('mongo.dbName');

    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }

    if (!dbName) {
      throw new Error('MONGO_DB_NAME is not defined');
    }

    this.client = new MongoClient(uri);
    await this.client.connect();
    this.db = this.client.db(dbName);

    console.log('MongoDB connected');
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    return this.db;
  }

  async onModuleDestroy() {
    await this.client.close();
    console.log('MongoDB disconnected');
  }
}
