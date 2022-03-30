import { Test, TestingModule } from '@nestjs/testing';
import { CondiesService } from './condies.service';

describe('CondiesService', () => {
  let service: CondiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CondiesService],
    }).compile();

    service = module.get<CondiesService>(CondiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
