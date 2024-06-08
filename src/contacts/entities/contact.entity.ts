import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactEntityDocument = ContactEntity & Document;

@Schema()
export class ContactEntity {
    @Prop()
    name: string;

    @Prop()
    number: string;

    @Prop()
    email: string;

    @Prop()
    dateOfBirth: string;

    @Prop()
    image: string;
}

export const ContactEntitySchema = SchemaFactory.createForClass(ContactEntity);

ContactEntitySchema.pre<ContactEntityDocument>('save', async function (next) {
    next();
});
