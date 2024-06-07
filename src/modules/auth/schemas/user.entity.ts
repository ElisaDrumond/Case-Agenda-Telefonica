import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { hash } from 'bcrypt'
import { Document } from 'mongoose';

export type UserEntityDocument = UserEntity & Document;

@Schema()
export class UserEntity{
    @Prop()
    username: string

    @Prop()
    email: string

    @Prop({select: false})
    password: string
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity)

UserEntitySchema.pre<UserEntityDocument>('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      this.password = await hash(this.password, 10);
    }
    next();
  });