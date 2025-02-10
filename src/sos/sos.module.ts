import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SOS } from './sos.entity';
import { SOSService } from './sos.service';
import { SOSController } from './sos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SOS])],  // เชื่อมโยงกับ Entity ของ SOS
  providers: [SOSService],  // ลงทะเบียน SOSService
  controllers: [SOSController],  // ลงทะเบียน SOSController
})
export class SOSModule {}
