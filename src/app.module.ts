import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { LoanModule } from './loan/loan.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PrismaModule,
    UserModule,
    BookModule,
    LoanModule,
  ],
})
export class AppModule {}

