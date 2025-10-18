import { Module } from '@nestjs/common';
import { WeatherController } from './infrastructure/weather.controller';
import { WeatherService } from './application/weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [],
})
export class WeatherModule {}
