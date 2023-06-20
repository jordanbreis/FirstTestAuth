import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async compPassword(password: string, accPassword: string) {
    const hash = await bcrypt.compare(password, accPassword);
    return hash;
  }

  async SingIn(email: string, senha: string) {
    const account = await this.userService.findOne(email);
    const accValid = await this.compPassword(senha, account.password);

    if (accValid) {
      const payload = { sub: account._id, username: account.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
