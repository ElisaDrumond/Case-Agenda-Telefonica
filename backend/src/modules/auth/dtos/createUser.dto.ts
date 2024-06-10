import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string
    @IsNotEmpty()
    readonly email: string
    @MinLength(8, { message: 'Password is too short. It should be at least 8 characters long.' })
    @MaxLength(20, { message: 'Password is too long. It should be at most 20 characters long.' })
    @IsNotEmpty()
    readonly password: string
}