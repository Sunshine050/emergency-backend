// src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service'; // อาจต้องปรับตามเส้นทางไฟล์ของคุณ
import { JwtPayload } from '../auth/jwt-payload.interface'; // ต้องสร้างไฟล์ interface นี้

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_secret_key_here', // เปลี่ยนเป็นคีย์ที่เหมาะสม
    });
  }

  async validate(payload: JwtPayload) {
    // ตรวจสอบผู้ใช้จาก payload ที่ได้จาก JWT
    return this.userService.findOne(payload.username);
  }
}
