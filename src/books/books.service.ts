import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Book, BookDocument} from './Schemas/bookSchema';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>){}

    async getBooks(query):Promise<Book[]>{
      return await this.bookModel.find({name: {$regex: new RegExp(query, 'i')}})
    }
}
