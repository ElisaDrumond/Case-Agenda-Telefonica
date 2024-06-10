import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContactEntity } from './schemas/contact.entity';
import { S3Service } from '../s3/s3.service'

@Injectable()
export class ContactsService {
    constructor(@InjectModel(ContactEntity.name) private readonly contactModel: Model<ContactEntity>,
    private s3Service: S3Service
  ) {}

  async create(createContactDto: CreateContactDto): Promise<ContactEntity> {
    const createdContact = new this.contactModel(createContactDto);
    return createdContact.save();
  }

  async findAll(): Promise<ContactEntity[]> {
    return this.contactModel.find().exec();
  }

  async findOne(id: string): Promise<ContactEntity> {
    const contact = await this.contactModel.findById(id).exec();
    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return contact;
  }

  async findByName(name: string): Promise<ContactEntity[]> {
    return this.contactModel.find({ name: new RegExp(name, 'i') }).exec();
  }
  

  async update(id: string, updateContactDto: UpdateContactDto): Promise<ContactEntity> {
    const updatedContact = await this.contactModel.findByIdAndUpdate(id, updateContactDto, { new: true }).exec();
    if (!updatedContact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return updatedContact;
  }

  async remove(id: string): Promise<ContactEntity> {
    const deletedContact = await this.contactModel.findByIdAndDelete(id).exec();
    if (!deletedContact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return deletedContact;
  }

  async addFileToContact(file: Express.Multer.File, id: string) {
    const contact = await this.contactModel.findById(id).exec();

    const key = `${file.fieldname}${Date.now()}`
    const imageUrl = await this.s3Service.uploadFile(file, key)

    await this.contactModel.findByIdAndUpdate({id}, {image: imageUrl})
  }

}