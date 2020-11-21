import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { User } from './users.model'
import { UserService } from './users.service'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    createUser(@Body('id') id: string,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: string): any {
        return this.userService.createUser(id, name, email, password, role)
    }
    @Get('/data')
    getUsers() {
        return this.userService.getUsers()
    }
    @Delete('/:id')
    removeUsers(@Param('id') id: string) {
        return this.userService.deletetUsers(id)
    }
    @Patch('/:id')
    updateUsers(@Param('id') id: string,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: string) {
        return this.userService.updateUser(id, { id, name, email, password, role })
    }
}