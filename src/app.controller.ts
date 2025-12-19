import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Controller()
export class AppController {
  constructor(private db: DatabaseService) {}

  @Get('pingdb')
  ping() {
    this.db.users();
    return { status: 'ok' };
  }
}
