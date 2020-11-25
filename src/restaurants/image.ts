import * as mongoose from "mongoose";

export const imgSchema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    fileURL: String
})

export const Image = mongoose.model('Image', imgSchema)

export class imgDTO {
    constructor(
        public originalname: string,
        public fieldname: string,
        public fileURL: string) { }
}