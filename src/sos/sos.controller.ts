import { Controller, Post } from '@nestjs/common';
import { SosService } from './sos.service';

@Controller('sos')
export class SosController {
  constructor(private readonly sosService: SosService) {}

  @Post()
  activateSos(): string {
    return this.sosService.triggerSos();
  }
}