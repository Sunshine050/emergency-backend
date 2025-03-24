import { Module } from '@nestjs/common';
import { RescueTeamsController } from './rescue-teams.controller';
import { RescueTeamsService } from './rescue-teams.service';

@Module({
  controllers: [RescueTeamsController],
  providers: [RescueTeamsService],
})
export class RescueTeamsModule {}
