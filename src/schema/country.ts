import { Status } from 'generated/prisma';
import { citySchema } from 'src/schema/city';
import { z } from 'zod';

export const countrySchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.nativeEnum(Status),
  cities: z.array(citySchema),
});
