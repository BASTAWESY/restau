import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
// const MONGODB_URL = 'mongodb+srv://pasta94:pasta94@alexrestau.3cnpg.mongodb.net/<alexrestau>?retryWrites=true&w=majority'
@Module({
  //mongodb+srv://pasta94:pasta94@alexrestau.3cnpg.mongodb.net/<dbname>?retryWrites=true&w=majority
  //mongodb://localhost/restau
  imports: [UserModule , MongooseModule.forRoot(process.env.MONGODB_URL||'mongodb://localhost/restau')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
