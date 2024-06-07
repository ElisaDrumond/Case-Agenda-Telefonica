import { Module } from '@nestjs/common';
import { UserModule } from './modules/auth/user.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/agenda')],
  controllers: [],
  providers: [],
})
export class AppModule {}
