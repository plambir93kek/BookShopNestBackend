import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { CartService } from "./cart.service";
import { cartDto } from "./cartdDto";


@Controller('/cart')
export class CartController {
    constructor(private readonly cartService: CartService){}
    @Post()
    addToCart(@Body() cartDto : cartDto){
        this.cartService.addToCart(cartDto)
    }
    @Delete()
    deleteFromCart(@Body() cartDto : cartDto){
       this.cartService.delete(cartDto)
    }

    @Get()
    getCart(@Query('user') userId){
        return this.cartService.getCart(userId)
    }
}