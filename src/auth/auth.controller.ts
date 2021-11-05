import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./userDto";

@Controller('/login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    login(@Body() userDto: UserDto) {
        return this.authService.login(userDto);
    }

    @Post('/refresh')
    refresh(@Body() tokenDto){
        return this.authService.refresh(tokenDto.token)
    }
}