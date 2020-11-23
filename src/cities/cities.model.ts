import * as mongoose from 'mongoose'

export const citySchema = new mongoose.Schema({
    id : mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    } 
})

export interface City extends mongoose.Document {
    name: string
}