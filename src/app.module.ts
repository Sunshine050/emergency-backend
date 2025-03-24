import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // นำเข้า UsersModule
import { AuthModule } from './auth/auth.module'; // นำเข้า AuthModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // ชนิดของฐานข้อมูล
      host: 'localhost', // เซิร์ฟเวอร์ที่ใช้
      port: 3306, // พอร์ตที่ใช้ (MySQL พอร์ต 3306)
      username: 'root', // ชื่อผู้ใช้ฐานข้อมูล
      password: 'your-password', // รหัสผ่าน
      database: 'your-database', // ชื่อฐานข้อมูล
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // เส้นทางของ entity ที่จะใช้ในโปรเจค
      synchronize: true, // ควบคุมการสร้าง schema
    }),
    UsersModule, // นำเข้า UsersModule เพื่อให้สามารถใช้ repository และ entity
    AuthModule, // นำเข้า AuthModule ถ้ามีการใช้
  ],
})
export class AppModule {}
