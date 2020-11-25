import { Req, Res, Body, Controller, Get, Post, UploadedFile, UseInterceptors, Param, HttpServer, Inject, Request } from "@nestjs/common";
import { RestauService } from "./restaurants.service";
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../utils/file-upload.utils';
import { imgDTO } from "./image";
import { REQUEST } from '@nestjs/core';

@Controller('/restaus')
export class RestauContoller {
    constructor(private readonly restauService: RestauService,
        @Inject(REQUEST) private readonly request: Request) { }
    @Post('/')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }),
    )
    createRestau(
        @Body('name') name: string,
        @UploadedFile() file,
        @Body('location') location: object,
        @Body('city') city: string,
        @Req() request: Request) {
        const image = new imgDTO(
            file.originalname, file.filename,
            request.headers['host'] + "/uploads/" + file.originalname
        )
        this.restauService.createOne(name, image, location, city)
    }

    @Get('/')
    gellAllRestaus() {
        return this.restauService.getAll()
    }

    @Get('/report')
    gellCountOfRestaus() {
        return this.restauService.getRestausAndCitirs()
    }

    @Get('/:id')
    getRestau(@Param('id') id: string) {
        const restau = this.restauService.getOne(id)
        return restau
    }
}