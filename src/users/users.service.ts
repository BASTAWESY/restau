import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './users.model'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly UserModel: Model<User>) { }

    async createUser(name: string, email: string, password: string, role: string) {
        const user = new this.UserModel({name, email, password, role });
        const result = await user.save();
        return result;
    }
    async getUsers() {
        const results = await this.UserModel.find()
        return results
    }
    async getOne(id: string) {
        const result = await this.UserModel.findById(id)
        return result
    }
    async deleteOne(id: string) {
        const item = await this.UserModel.findByIdAndRemove(id)
        return item
    }
    async updateUser(id: string,name:string , email:string , password:string , role:string) {
        const user = {name , email , password , role}
        const item = await this.UserModel.findByIdAndUpdate(id, user)
        return item
    }
}