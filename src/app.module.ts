import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SOSModule } from './sos/sos.module'; 

import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [UsersModule, SOSModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
