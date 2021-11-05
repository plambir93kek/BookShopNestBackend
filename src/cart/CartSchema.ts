import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface BookInCart {
  _id: string;
  author: string;
  discont: string;
  name: string;
  picture: string;
  price: string;
}

export type CartDocument = Cart & Document;

@Schema()
export class Cart {

 @Prop()
  userId: string;

  @Prop()
  books: BookInCart[];

}

export const CartSchema = SchemaFactory.createForClass(Cart);