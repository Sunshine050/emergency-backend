import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';  // นำเข้า UserRepository
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],  // เพิ่ม UserRepository ใน TypeOrmModule.forFeature
  providers: [UserRepository, AuthService],  // เพิ่ม UserRepository เป็น provider
  exports: [UserRepository],  // Export UserRepository เพื่อให้สามารถใช้งานในโมดูลอื่น
})
export class UsersModule {}
