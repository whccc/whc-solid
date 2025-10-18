import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from '../application/weather.service';
import { GetWeatherDto } from '../dtos/getWeathetDto';
import { WeatherDto } from '../dtos/weatherDto';
import { ApiResponse } from 'src/shared/dtos/ApiResponse';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(
    @Query() dtoWeather: GetWeatherDto,
  ): Promise<ApiResponse<WeatherDto>> {
    const data = await this.weatherService.getWeather(dtoWeather);
    return new ApiResponse<WeatherDto>(
      data,
      'Weather data retrieved successfully',
      200,
    );
  }
}
