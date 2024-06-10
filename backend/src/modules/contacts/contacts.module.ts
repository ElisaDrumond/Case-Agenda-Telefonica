import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service'
import { ContactsController } from './contacts.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { ContactEntity, ContactEntitySchema } from './schemas/contact.entity'
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [MongooseModule.forFeature([{name: ContactEntity.name, schema: ContactEntitySchema}]), S3Module],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
