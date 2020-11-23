import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, requires: true },
    email: { type: String, requires: true },
    password: { type: String, requires: true },
    role: { type: String, enum: ['ADMIN', 'NORMAL'], default: 'NORMAL', requires: true }
})

export interface User extends mongoose.Document {
    name: String
    email: String
    password: String
    role: String
}