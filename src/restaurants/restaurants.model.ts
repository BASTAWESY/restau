import * as mongoose from 'mongoose'
import {imgDTO, imgSchema} from './image'
export const restauSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, unique: true, required: true },
    image: [imgSchema],
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [String],
            default: [2.1, 2.1]
        }
    },
    city: { type: mongoose.Types.ObjectId, ref: 'City' }
})

export interface Restau extends mongoose.Document {
    name: string
    image: imgDTO
    location: object
    city: string
}