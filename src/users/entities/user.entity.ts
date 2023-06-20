import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  nome: string;
  @Prop()
  idade: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
