import { Injectable } from '@nestjs/common';

@Injectable()
export class HospitalsService {
  getHospitals(): string {
    return 'List of hospitals';
  }
}