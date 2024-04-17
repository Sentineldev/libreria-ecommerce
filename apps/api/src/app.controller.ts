import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello world!';
  }
}
