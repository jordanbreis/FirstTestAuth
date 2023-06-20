import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(120)
  idade: number;
}
