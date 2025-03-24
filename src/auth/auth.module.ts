import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';  // เพิ่มการ import UsersModule

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',  // ค่าคอนฟิกสำหรับ JWT
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,  // นำเข้า UsersModule เพื่อให้สามารถใช้งาน UserRepository ได้
  ],
  providers: [AuthService],
  exports: [AuthService],  // ถ้าต้องการให้ AuthService ใช้งานในโมดูลอื่นๆ
})
export class AuthModule {}
