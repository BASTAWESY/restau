import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';

@Module({
  //mongodb+srv://pasta94:<password>@alexrestau.3cnpg.mongodb.net/<dbname>?retryWrites=true&w=majority
  //mongodb://localhost/restau
  imports: [UserModule , MongooseModule.forRoot('mongodb+srv://pasta94:<password>@alexrestau.3cnpg.mongodb.net/<alexrestau>?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
