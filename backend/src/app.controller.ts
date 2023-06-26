import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class AppController1 {
  constructor(private readonly appService: AppService) {}

  @Post('api/:id')
  getHell1(): string {
    return this.appService.getHello();
  }
}
