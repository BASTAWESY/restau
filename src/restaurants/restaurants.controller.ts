import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { RestauService } from "./restaurants.service";
import { readFileSync } from "fs"
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller('/restaus')
export class RestauContoller {
    constructor(private readonly restauService: RestauService) { }

    @Post('/')
    @UseInterceptors(FilesInterceptor('image'))
    createRestau(
        @Body('name') name: string,
        @UploadedFiles() image,
        @Body('location') location: object,
        @Body('city') city: string
    ) {
        console.log(image)
        image[0].buffer
        image[0].mimetype
        this.restauService.createOne(name, image[0], location, city)
 
    }
    @Get('/')
    gellAllRestaus(){
        return this.restauService.getAll()
    }
}