import { createZodDto } from 'nestjs-zod';
import { countrySchema } from 'src/schema/country';
import { z } from 'zod';

export const citySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  countryId: z.string().uuid(),
  country: countrySchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class CreateCityDto extends createZodDto(citySchema) {}
