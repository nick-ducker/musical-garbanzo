import { Module } from '@nestjs/common';
import { PublicApiService } from './public-api.service';
import { PublicApiController } from './public-api.controller';
import { CondiesModule } from 'src/condies/condies.module';

@Module({
  imports: [CondiesModule],
  providers: [PublicApiService],
  controllers: [PublicApiController]
})
export class PublicApiModule {}
