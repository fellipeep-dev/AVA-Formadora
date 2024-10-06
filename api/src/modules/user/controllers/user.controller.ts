import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../../domain/dtos';
import { UserService } from '../services/user.service';
import { UserEntity } from '../../../domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(
    @Body() { email, password },
  ): Promise<{ verify: boolean; userId?: number }> {
    return this.userService.login(email, password);
  }

  @Get()
  findAllUsers(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    updateUserDto.id = id;
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
