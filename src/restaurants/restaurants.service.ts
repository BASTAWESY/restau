import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Restau } from "./restaurants.model";
import { Model } from "mongoose";
import { imgDTO } from "./image";

@Injectable()
export class RestauService {
    constructor(@InjectModel('Restau') private readonly restauModel: Model<Restau>) { }

    async createOne(name: string, image: typeof imgDTO, location: object, city: string) {
        const i = new this.restauModel()
        
        const restau = new this.restauModel({ name, image, location, city })
        const result = await restau.save()
        return result
    }
    async getAll() {
        const result = await this.restauModel.find()
        return result
    }
}