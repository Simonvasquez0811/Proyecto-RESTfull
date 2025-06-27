import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({ where: { book_id: id } });
  }

 create(data: any) {
  return this.prisma.book.create({
    data: {
      title: data.title,
      author: data.author,
      category: data.category, 
      isbn: data.isbn,
      publication_date: new Date(data.publication_date),
      description: data.description,
      file_path: data.file_path,
      cover_image: data.cover_image,
    },
  });
}




  update(id: number, data: any) {
    return this.prisma.book.update({ where: { book_id: id }, data });
  }

  remove(id: number) {
    return this.prisma.book.delete({ where: { book_id: id } });
  }
}

