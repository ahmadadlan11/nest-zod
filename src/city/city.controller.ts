import { Body, Controller, Get, Post } from '@nestjs/common';
import { CityService } from 'src/city/city.service';
import { CreateCityDto } from 'src/schema/city';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getCities() {
    return this.cityService.getCities();
  }

  @Post()
  async createCity(@Body() createCityInput: CreateCityDto) {
    return this.cityService.createCity(createCityInput);
  }
}
