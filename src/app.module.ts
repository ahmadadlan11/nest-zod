import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { PrismaModule } from 'nestjs-prisma';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    CityModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
