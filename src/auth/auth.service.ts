import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(email: string) {
    return { message: 'register stub' };
  }

  login(email: string, password: string) {
    return { message: 'login stub' };
  }
}
