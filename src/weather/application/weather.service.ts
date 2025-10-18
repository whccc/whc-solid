import { Injectable } from '@nestjs/common';
import { GetWeatherDto } from '../dtos/getWeathetDto';
import { WeatherDto } from '../dtos/weatherDto';
import { HttpService } from '@nestjs/axios';
import { IWeatherServiceInterface } from './weather.interface';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService implements IWeatherServiceInterface {
  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getWeather(dtoWeather: GetWeatherDto): Promise<WeatherDto> {
    const { latitude: lat, longitude: lon } = dtoWeather;
    const apiKey = this.configService.get<string>('KEY_MAP');
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
    const { data } = await firstValueFrom(this.http.get(url));
    return data as WeatherDto;
  }
}
