import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  sendNotification(): string {
    return 'Notification sent!';
  }
}