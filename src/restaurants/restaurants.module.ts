import { Module } from "@nestjs/common";
import { RestauContoller } from "./restaurants.controller";
import { restauSchema } from './restaurants.model'
import { RestauService } from "./restaurants.service";
import { MongooseModule } from "@nestjs/mongoose"
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Restau', schema: restauSchema }])],
    controllers: [RestauContoller],
    providers: [RestauService]
})
export class RestauModule { }    