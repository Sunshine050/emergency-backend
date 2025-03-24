import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyResponseController } from './emergency-response.controller';

describe('EmergencyResponseController', () => {
  let controller: EmergencyResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyResponseController],
    }).compile();

    controller = module.get<EmergencyResponseController>(
      EmergencyResponseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
