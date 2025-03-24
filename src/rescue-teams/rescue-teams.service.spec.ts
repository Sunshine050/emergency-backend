import { Test, TestingModule } from '@nestjs/testing';
import { RescueTeamsService } from './rescue-teams.service';

describe('RescueTeamsService', () => {
  let service: RescueTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RescueTeamsService],
    }).compile();

    service = module.get<RescueTeamsService>(RescueTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
