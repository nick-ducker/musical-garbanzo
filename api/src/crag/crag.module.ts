import { Module } from '@nestjs/common';
import { StationModule } from 'src/station/station.module';
import { CragService } from './crag.service';

@Module({
  imports: [StationModule],
  providers: [CragService]
})
export class CragModule {}
