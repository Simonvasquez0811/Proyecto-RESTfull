import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { user_id: id } });
  }

  create(data: any) {
    return this.prisma.user.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.user.update({ where: { user_id: id }, data });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { user_id: id } });
  }
}


