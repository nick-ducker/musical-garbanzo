import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { StationModule } from './station/station.module';

@Module({
  imports: [WeatherApiModule, StationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
