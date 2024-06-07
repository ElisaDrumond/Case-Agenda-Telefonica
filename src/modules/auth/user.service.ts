import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from './schemas/user.entity';
import { Model } from 'mongoose';
import { UserResponseType } from './types/userResponse.type';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {}

  async createUser(createUserDto: CreateUserDto): Promise <UserEntity> {
    const user = await this.userModel.findOne({email: createUserDto.email})

    if (user) {
      throw new HttpException('Email is already taken', HttpStatus.UNPROCESSABLE_ENTITY)
    }

    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  buildUserResponse(userEntity : UserEntity): UserResponseType {
    return {
      username: userEntity.username,
      email: userEntity.email
    }
  }
}