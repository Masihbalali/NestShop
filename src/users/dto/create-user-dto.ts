import { IsArray, isArray, IsDateString, IsEmail, IsMilitaryTime, IsNotEmpty, IsString, IsStrongPassword, Length, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    readonly first_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly last_name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsStrongPassword({ minLength: 5 })
    readonly password: string;
}