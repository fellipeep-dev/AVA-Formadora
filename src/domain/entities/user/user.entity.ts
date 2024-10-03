import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  email: string;
  birthDate: Date;
  password: string;
  heigth: string;
  weigth: string;
}
