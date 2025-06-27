import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { LoanService } from './loan.service';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  getAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.loanService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.loanService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.loanService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loanService.remove(id);
  }
}

