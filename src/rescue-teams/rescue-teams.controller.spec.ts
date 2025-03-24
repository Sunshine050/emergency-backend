import { Test, TestingModule } from '@nestjs/testing';
import { RescueTeamsController } from './rescue-teams.controller';

describe('RescueTeamsController', () => {
  let controller: RescueTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RescueTeamsController],
    }).compile();

    controller = module.get<RescueTeamsController>(RescueTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
