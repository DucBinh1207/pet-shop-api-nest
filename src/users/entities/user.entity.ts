import { ObjectId } from 'mongodb';

export class UserEntity {
  _id?: ObjectId;

  email: string;
  password: string;

  id_role: number;

  name?: string;
  telephone_number?: string;

  province?: string;
  district?: string;
  ward?: string;
  street?: string;

  image?: string;
  nationality?: string;

  status: number;
  isVerified: boolean;

  createdAt: Date;
  updatedAt: Date;
}
