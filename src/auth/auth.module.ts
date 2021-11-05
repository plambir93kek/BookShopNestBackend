import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User, UserSchema } from "./userSchema";


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
        secret: 'secret',
        signOptions: { expiresIn: '24h' },
    })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule { };