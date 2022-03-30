import { Module } from '@nestjs/common';
import { CondiesService } from './condies.service';

@Module({
  providers: [CondiesService]
})
export class CondiesModule {}
