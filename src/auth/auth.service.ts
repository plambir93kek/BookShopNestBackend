import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "./userDto";
import { User, UserDocument } from "./userSchema";


@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService){}

    async login(userDto: UserDto){
      const user = await this.validateUser(userDto);
      const token = this.jwtService.sign({_id: user._id});
      user.token = token;
      user.save()
      return {token, _id: user._id};
    }

    async refresh(tokenDto){
        const verify = this.jwtService.verify(tokenDto.token)
        return {_id: verify._id}
    }

    private async validateUser(userDto: UserDto){
        const user = await this.userModel.findOne({login: userDto.login});
        const password = await this.userModel.findOne({password: userDto.password});
        if(user && password){
            return user
        } else {
            throw new UnauthorizedException({message: 'incorrect login or password'})
        }
    }
}
