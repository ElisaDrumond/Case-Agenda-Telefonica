import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactEntityDocument = ContactEntity & Document;

@Schema()
export class ContactEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  dateOfBirth?: Date;

  @Prop({ required: false })
  image?: string;
}

export const ContactEntitySchema = SchemaFactory.createForClass(ContactEntity);