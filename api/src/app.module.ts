import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { StationModule } from './station/station.module';
import { CragModule } from './crag/crag.module';

@Module({
  imports: [WeatherApiModule, StationModule, CragModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
