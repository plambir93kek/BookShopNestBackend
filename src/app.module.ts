import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BooksModule } from './books/books.module';
import * as path from 'path';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:****@cluster0.4ezdr.mongodb.net/music-platform?retryWrites=true&w=majority'),
  BooksModule,
  AuthModule,
  CartModule,
  ServeStaticModule.forRoot({
    rootPath: path.resolve('./static'),
  }),
]
})
export class AppModule {}
