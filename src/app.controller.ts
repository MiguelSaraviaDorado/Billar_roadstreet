import { Controller, Delete, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  all(): string {
    return this.appService.all();
  }

  @Post()
  post(): string  {
    return this.appService.new();
  }

  @Put()
  put(): string{
    return this.appService.update();
  }

  @Delete()
  delete(): string{
    return this.appService.delete();
  }
}