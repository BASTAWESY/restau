import * as mongoose from "mongoose";

export const imgSchema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
})

export const Image = mongoose.model('Image', imgSchema)

export class imgDTO {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: string
    size: number
}