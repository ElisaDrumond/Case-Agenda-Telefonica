import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './modules/auth/user.module'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './modules/auth/middlewares/auth.middleware';
import { ContactsModule } from './modules/contacts/contacts.module'
import { S3Module } from './modules/s3/s3.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ContactsModule, MongooseModule.forRoot('mongodb://localhost/agenda'), S3Module, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}
