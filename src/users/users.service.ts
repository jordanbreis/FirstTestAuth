import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async cryptPassword(password: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.cryptPassword(createUserDto.password);
    return this.UserModel.create(createUserDto);
  }

  findAll() {
    return this.UserModel.find().select(['nome', '_id']);
  }

  findOne(email: string) {
    return this.UserModel.findOne({ email: email });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
