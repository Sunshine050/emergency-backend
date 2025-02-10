import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SOS } from './sos.entity';

@Injectable()
export class SOSService {
  constructor(
    @InjectRepository(SOS)  // ใช้ Repository ของ SOS Entity
    private readonly sosRepository: Repository<SOS>,
  ) {}

  // สร้างการแจ้งเหตุฉุกเฉิน
  async createSOS(sosData: { userId: number; location: string; healthInfo: string }): Promise<SOS> {
    const sos = this.sosRepository.create(sosData);  // สร้าง object SOS จากข้อมูล
    return await this.sosRepository.save(sos);  // บันทึกข้อมูล SOS ในฐานข้อมูล
  }

  // ค้นหาการแจ้งเหตุทั้งหมด
  async findAll(): Promise<SOS[]> {
    return this.sosRepository.find();  // ดึงข้อมูลการแจ้งเหตุฉุกเฉินทั้งหมด
  }

  // ค้นหาการแจ้งเหตุฉุกเฉินตาม ID
  async findOne(id: number): Promise<SOS | null> {
    return this.sosRepository.findOne({ where: { id } });  // ค้นหาการแจ้งเหตุฉุกเฉินตาม ID
  }
}
