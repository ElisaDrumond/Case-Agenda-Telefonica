import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContactsModule, MongooseModule.forRoot('mongodb://localhost/agenda'), ContactsModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
