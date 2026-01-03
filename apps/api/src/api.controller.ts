import { ApiService } from './api.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
}
