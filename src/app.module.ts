import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './modules/auth/user.module'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './modules/auth/middlewares/auth.middleware';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/agenda')],
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
