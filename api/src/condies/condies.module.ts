import { Module } from '@nestjs/common';
import { CragModule } from 'src/crag/crag.module';
import { CondiesService } from './condies.service';

@Module({
  imports: [CragModule],
  providers: [CondiesService]
})
export class CondiesModule {}
