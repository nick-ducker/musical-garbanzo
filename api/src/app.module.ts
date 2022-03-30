import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherApiModule } from './weather-api/weather-api.module';

@Module({
  imports: [WeatherApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
