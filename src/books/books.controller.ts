import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';


@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(@Query('query') query: string){
      return this.booksService.getBooks(query);
  }
}
