import { ApiResponse } from 'src/shared/dtos/ApiResponse';
import { GetWeatherDto } from '../dtos/getWeathetDto';
import { WeatherDto } from '../dtos/weatherDto';

export interface IWeatherServiceInterface {
  getWeather(dtoWeather: GetWeatherDto): Promise<WeatherDto>;
}
