import { Injectable } from '@nestjs/common';

@Injectable()
export class SosService {
  triggerSos(): string {
    return 'SOS triggered!';
  }
}