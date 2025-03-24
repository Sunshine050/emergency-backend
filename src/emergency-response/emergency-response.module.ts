import { Module } from '@nestjs/common';
import { EmergencyResponseController } from './emergency-response.controller';
import { EmergencyResponseService } from './emergency-response.service';

@Module({
  controllers: [EmergencyResponseController],
  providers: [EmergencyResponseService],
})
export class EmergencyResponseModule {}
