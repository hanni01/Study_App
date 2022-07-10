import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}
  getHello(): string {
    this.prismaService.user.create({ data: { email: 'email', name: 'name' } });
    return 'Hello World!';
  }
}
