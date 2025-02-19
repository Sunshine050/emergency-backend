import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SOSService } from './sos.service';


@Controller('sos')
export class SOSController {
  constructor(private readonly sosService: SOSService) {}

  @Post()
  async sendSOS(@Body() sosData: { userId: number; location: string; healthInfo: string }) {
    return this.sosService.createSOS(sosData);  
  }

  @Get()
  async findAll(): Promise<any> {
    return this.sosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.sosService.findOne(id);  
  }
}
