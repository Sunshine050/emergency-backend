import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()  // ชี้ว่าเป็น Primary Key ที่จะเพิ่มค่าอัตโนมัติ
  id: number;

  @Column()  // คอลัมน์ที่ใช้เก็บชื่อผู้ใช้
  username: string;

  @Column()  // คอลัมน์ที่ใช้เก็บรหัสผ่าน
  password: string;
}
