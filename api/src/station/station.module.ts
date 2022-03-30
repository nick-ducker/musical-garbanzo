import { Module } from '@nestjs/common';
import { WeatherApiModule } from 'src/weather-api/weather-api.module';
import { StationService } from './station.service';

@Module({
  imports: [WeatherApiModule],
  providers: [StationService]
})
export class StationModule {}
