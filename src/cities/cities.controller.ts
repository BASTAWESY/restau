import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post } from "@nestjs/common";
import { CityService } from './cities.service'

@Controller('cities')
export class CityController {
    constructor(private readonly cityService: CityService) {
    }

    @Post('/')
    createCity(@Body('name') name: string) {
        return this.cityService.createCity(name)
    }
    @Get('/:id')
    getCity(@Param('id') id: string) {
        const result = this.cityService.getOne(id)
        console.log(result)
        return result
    }
    @Get('/')
    getAllCities() {
        return this.cityService.getAll()
    }
    @Delete('/:id')
    deleteCity(@Param('id') id: string) {
        return this.cityService.deleteOne(id)
    }
    @Patch('/:id')
    updateCity(@Param('id') id: string, @Body('name') name: string) {
        return this.cityService.updateOne(id, name)
    }

}


