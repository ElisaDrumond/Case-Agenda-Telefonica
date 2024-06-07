import { UserEntity } from "../schemas/user.entity";

export type UserResponseType = Omit<UserEntity, 'password'>
