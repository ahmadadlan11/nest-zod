import { Controller, Get } from '@nestjs/common';
import { CountryService } from 'src/country/country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCountries() {
    return this.countryService.getCountries();
  }
}
