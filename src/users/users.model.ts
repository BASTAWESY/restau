import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    id: { type: String, requires: true, unique: true },
    name: { type: String, requires: true },
    email: { type: String, requires: true },
    password: { type: String, requires: true },
    role: { type: String, enum: ['ADMIN', 'NORMAL'], default: 'NORMAL', requires: true }
})

export interface User extends mongoose.Document{
    id: String
    name: String
    email: String
    password: String
    role: String
}