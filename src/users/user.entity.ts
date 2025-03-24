import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  // เพิ่มฟิลด์ name

  @Column()
  email: string;

  @Column()
  password: string;
}
