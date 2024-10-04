import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class UserRepository extends RepositoryFactory<
  UserEntity,
  CreateUserDto,
  UpdateUserDto
> {
  constructor() {
    super('user');
  }

  create(data: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.user.create({
      data: {
        ...data,
        birthDate: new Date(data.birthDate),
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findById(id: number) {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prismaService.user.findFirst({
      where: { email },
    });
  }
}
