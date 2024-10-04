import { ServiceBase } from 'src/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { UserEntity } from 'src/domain/entities';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService
  implements ServiceBase<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.create(dto);

    return user;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ verify: boolean; userId?: number }> {
    const user = await this.userRepository.findByEmail(email);

    if ((user.password = password)) return { verify: true, userId: user.id };

    return { verify: false };
  }

  async findAll(): Promise<UserEntity[]> {
    const data = await this.userRepository.findAll();

    return data;
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);

    return user;
  }

  async update(dto: UpdateUserDto): Promise<UserEntity> {
    const update = await this.userRepository.update(dto);

    return update;
  }

  async remove(id: number): Promise<UserEntity> {
    const remove = await this.userRepository.delete(id);

    return remove;
  }
}
