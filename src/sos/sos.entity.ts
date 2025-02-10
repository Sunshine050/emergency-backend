import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SOS {
  @PrimaryGeneratedColumn()  // ชี้ว่าเป็น Primary Key ที่จะเพิ่มค่าอัตโนมัติ
  id: number;

  @Column()  // คอลัมน์ที่ใช้เก็บ User ID (รหัสผู้ใช้งาน)
  userId: number;

  @Column()  // คอลัมน์ที่ใช้เก็บข้อมูลตำแหน่งของเหตุการณ์
  location: string;

  @Column()  // คอลัมน์ที่ใช้เก็บข้อมูลสุขภาพของผู้แจ้งเหตุ
  healthInfo: string;
}
