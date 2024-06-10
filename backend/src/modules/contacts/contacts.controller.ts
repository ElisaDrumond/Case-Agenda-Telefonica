import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Request, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.contactsService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/:id/upload-file')
  async addImageToContact(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Request() req,
  ) {
    console.log(file)

    const { sub: email } = req;
    await this.contactsService.addFileToContact(file, id)
  }
}
