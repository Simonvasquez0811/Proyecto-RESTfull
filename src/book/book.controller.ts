import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.bookService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.remove(id);
  }
}
