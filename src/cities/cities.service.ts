import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { City } from './cities.model'

@Injectable()
export class CityService {
    constructor(@InjectModel('City') private readonly cityModel: Model<City>) { }

    async createCity(name: string) {
        const city = new this.cityModel({ name })
        const result = await city.save()
        return result
    }

    async getOne(id: string) {
        const result = await this.cityModel.findById(id)
        return result
    }
    async getAll() {
        const result = await this.cityModel.find()
        return result
    }
    async deleteOne(id: string) {
        const result = await this.cityModel.findByIdAndDelete(id)
        return result
    }
    async updateOne(id: string, name: string) {
        const newCity = { name }
        const result = await this.cityModel.findByIdAndUpdate(id, newCity)
        return result
    }
}