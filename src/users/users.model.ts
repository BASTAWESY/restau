import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    city: { type: String, ref: 'City' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['ADMIN', 'NORMAL'],
        default: 'NORMAL',
        requires: true
    },
    salt: String
})

export interface User extends mongoose.Document {
    city:string
    name: string
    email: string
    password: string
    role: string
    salt: any
}