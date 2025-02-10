import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',         // ชนิดของฐานข้อมูล
  host: 'localhost',     // ที่อยู่ของ MySQL
  port: 3306,            // พอร์ตที่ MySQL ใช้งาน
  username: 'root',      // ชื่อผู้ใช้ MySQL
  password: '',          // รหัสผ่าน (กรณีไม่มีให้เว้นว่าง)
  database: 'emergency_db',  // ชื่อฐานข้อมูล
  entities: [__dirname + '/../**/*.entity.{js,ts}'],  // ที่อยู่ของ Entity ต่างๆ
  synchronize: true,     // เปิดการซิงโครไนซ์กับฐานข้อมูล
};
