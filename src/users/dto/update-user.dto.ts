import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  Max,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
