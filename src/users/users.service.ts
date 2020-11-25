import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './users.model'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly UserModel: Model<User>) { }

    async createUser(name: string, email: string, password: string, role: string) {
        const user = new this.UserModel({ name, email, password, role });
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
    async updateUser(id: string, name: string, email: string, password: string, role: string) {
        const user = { name, email, password, role }
        const item = await this.UserModel.findByIdAndUpdate(id, user)
        return item
    }
    async signUp(name: string, email: string, password: string, role: string) {
        try {
            const validEmail = await this.UserModel.findOne({ email })
            const validName = await this.UserModel.findOne({ name })
            const validPass = await this.UserModel.findOne({ password })
            if (validPass || validEmail || validName) {
                return 'email or name or password lready exixts ... '
            }
        }
        catch (error) {
            if (error.code == 23505)
                return 'email or name or password lready exixts ... '
        }
        //hashing password and saving ..
        const userSalt = await bcrypt.genSalt()
        const encryptedPassword = await bcrypt.hash(password, userSalt)
        const finalUser = new this.UserModel()
        finalUser.name = name
        finalUser.password = encryptedPassword
        finalUser.email = email
        finalUser.role = role
        finalUser.salt = userSalt
        // console.log("#########" + finalUser)
        const result = await finalUser.save()
        return result
    }

    async logIn(name: string, password: string) {
        try {
            const validName = await this.UserModel.findOne({ name })
            const encryptedPassword = await bcrypt.hash(password, validName.salt)
            console.log(encryptedPassword);
            // const validPass = await this.UserModel.findOne({ encryptedPassword })
            // if (validPass && validName) {
            return 'OK ..  '
            // }
        }
        catch (error) {
            if (error)
                return 'ERROR !! '
        }
    }
}