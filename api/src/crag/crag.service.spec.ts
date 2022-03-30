import { Test, TestingModule } from '@nestjs/testing';
import { CragService } from './crag.service';

describe('CragService', () => {
  let service: CragService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CragService],
    }).compile();

    service = module.get<CragService>(CragService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
