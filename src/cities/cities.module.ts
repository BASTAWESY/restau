import { Module } from "@nestjs/common";
import { citySchema } from './cities.model'
import { MongooseModule } from '@nestjs/mongoose'
import { CityController } from "./cities.controller";
import { CityService } from './cities.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'City', schema: citySchema }])],
    controllers: [CityController],
    providers: [CityService]
})
export class CityModule { }