import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCityDto } from 'src/schema/city';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async createCity(createCityInput: CreateCityDto) {
    return this.prisma.city.create({
      data: {
        name: createCityInput.name,
        countryId: createCityInput.countryId,
      },
    });
  }

  async getCities() {
    return this.prisma.city.findMany({
      include: { country: true },
    });
  }
}
