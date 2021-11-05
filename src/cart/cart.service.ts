import { createParamDecorator, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book } from "src/books/Schemas/bookSchema";
import { cartDto } from "./cartdDto";
import { Cart, CartDocument } from "./CartSchema";


@Injectable()
export class CartService{
    constructor(@InjectModel(Cart.name) private catModel: Model<CartDocument>) {}

    async addToCart(cartDto: cartDto){
        const cart = await this.catModel.findOne({userId: cartDto.userId});
        if(cart.books.find(book =>
            book._id === cartDto.book._id
            )){
                return;
            }
        cart.books.push(cartDto.book)
        cart.save()
    }

    async delete(cartDto: cartDto){
        const cart = await this.catModel.findOne({userId: cartDto.userId});
        cart.books = cart.books.filter(book => 
            book._id !== cartDto.book._id
            )
        cart.save();
    }

    async getCart(userId){
        const cart = await this.catModel.findOne({userId: userId});
        return cart;
    }
}