import { Injectable } from '@nestjs/common'
import { User } from './users.model'

@Injectable()
export class UserService {
    users: User[] = []
    constructor() { }

    createUser(id: string, name: string, email: string, password: string, role: string): any {
        const user = new User(id, name, email, password, role)
        this.users.push(user)
        return user
    }
    getUsers(): any {
        return this.users
    }
    deletetUsers(id: string) {
        const item = this.users.findIndex(x => x.id === id)
        console.log('out :  ' + item)
        this.users.splice(item, 1)
        return this.users
    }
    updateUser(id: string, user: User): any {
        let item = this.users.find(x => x.id === id)
        item.name = user.name
        item.email = user.email
        item.password = user.password
        item.role = user.role
        return user
    }
}