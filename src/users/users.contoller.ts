import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { UserService } from './users.service'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    createUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: string): any {
        return this.userService.createUser(name, email, password, role)
    }
    @Get('/')
    getUsers() {
        return this.userService.getUsers()
    }
    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.userService.getOne(id)
    }
    @Delete('/:id')
    deleteOne(@Param('id') id: string) {
        return this.userService.deleteOne(id)
    }
    @Patch('/:id')
    updateUsers(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: string) {
        return this.userService.updateUser(id, name, email, password, role)
    }
    @Post('signup')
    signUpUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: string
    ) {
        return this.userService.signUp(name, email, password, role)
    }
    @Get('login')
    logInUser(
        @Body('name') name: string,
        @Body('password') password: string
    ) {
        return this.userService.logIn(name, password)
    }

}