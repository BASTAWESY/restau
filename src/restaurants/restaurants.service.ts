import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Restau } from "./restaurants.model";
import { Model } from "mongoose";
import { imgDTO } from "./image";

@Injectable()
export class RestauService {
    constructor(@InjectModel('Restau') private readonly restauModel: Model<Restau>) { }

    async createOne(name: string, image: imgDTO, location: object, city: string) {
        const restau = new this.restauModel({ name, image, location, city })
        const result = await restau.save()
        return result
    }
    async getAll() {
        const result = await this.restauModel.find()
        return result
    }
    async getOne(id: string) {
        const result = await this.restauModel.findById(id)
        return result
    }
    async getRestausAndCitirs() {
        const result = await this.restauModel.find().populate('City')
        return this.restauModel.aggregate([
            { $group: { _id: "$name", cities: { $push: "$city" } } }
        ])
    }
}