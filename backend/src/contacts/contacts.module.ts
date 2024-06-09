import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactEntity, ContactEntitySchema } from './schemas/contact.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: ContactEntity.name, schema: ContactEntitySchema}])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
