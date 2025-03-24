import { Injectable } from '@nestjs/common';

@Injectable()
export class EmergencyResponseService {
  handleEmergency(): string {
    return 'Emergency response team dispatched!';
  }
}