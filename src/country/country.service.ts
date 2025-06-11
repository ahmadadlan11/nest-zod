import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCountries() {
    return this.prisma.country.findMany();
  }
}
