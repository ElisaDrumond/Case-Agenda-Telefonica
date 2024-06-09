import { IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUrl } from "class-validator";

export class CreateContactDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber('BR')
    number: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: string;

    @IsUrl()
    image: string;
}
