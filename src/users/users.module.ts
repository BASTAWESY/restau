import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from './users.contoller';
import { UserService } from "./users.service";
import { userSchema } from './users.model'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
    controllers: [UserController],
    providers: [UserService]
}
)
export class UserModule { }
