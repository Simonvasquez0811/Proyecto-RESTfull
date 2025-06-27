import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoanService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.loan.findMany({ include: { user: true, book: true } });
  }

  findOne(id: number) {
    return this.prisma.loan.findUnique({
      where: { loan_id: id },
      include: { user: true, book: true },
    });
  }

create(data: any) {
  return this.prisma.loan.create({
    data: {
      user_id: data.user_id,
      book_id: data.book_id,
      loan_date: new Date(),  // se asigna automáticamente al momento
      due_date: new Date(data.due_date), // viene del formulario
      return_date: data.return_date ? new Date(data.return_date) : null,
      status: data.status || 'active',
    },
  });
}


  update(id: number, data: any) {
    return this.prisma.loan.update({ where: { loan_id: id }, data });
  }

  remove(id: number) {
    return this.prisma.loan.delete({ where: { loan_id: id } });
  }
}

