import { Controller, Get } from '@nestjs/common';
import { EmergencyResponseService } from './emergency-response.service';

@Controller('emergency-response')
export class EmergencyResponseController {
  constructor(private readonly emergencyResponseService: EmergencyResponseService) {}

  @Get()
  respondToEmergency(): string {
    return this.emergencyResponseService.handleEmergency();
  }
}