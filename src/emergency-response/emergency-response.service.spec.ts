import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyResponseService } from './emergency-response.service';

describe('EmergencyResponseService', () => {
  let service: EmergencyResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencyResponseService],
    }).compile();

    service = module.get<EmergencyResponseService>(EmergencyResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
