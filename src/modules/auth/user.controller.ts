import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './schemas/user.entity';
import { UserResponseType } from './types/userResponse.type';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body() createUserDto : CreateUserDto
  ): Promise <UserResponseType> {
    const user = await this.userService.createUser(createUserDto)
    return this.userService.buildUserResponse(user)
  }
}