import { Module } from '@nestjs/common';
import { CragService } from './crag.service';

@Module({
  providers: [CragService]
})
export class CragModule {}
