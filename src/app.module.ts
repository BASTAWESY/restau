import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { CityModule } from './cities/cities.module';
import { RestauModule } from './restaurants/restaurants.module';
// const MONGODB_URL = 'mongodb+srv://pasta94:pasta94@alexrestau.3cnpg.mongodb.net/<alexrestau>?retryWrites=true&w=majority'
@Module({
  //mongodb+srv://pasta94:pasta94@alexrestau.3cnpg.mongodb.net/<dbname>?retryWrites=true&w=majority
  //mongodb://localhost/restau
  //link f cloud DB == > process.env.MONGODB_URL ||
  imports: [UserModule, CityModule, RestauModule ,
    MongooseModule.forRoot('mongodb://localhost/restau')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
