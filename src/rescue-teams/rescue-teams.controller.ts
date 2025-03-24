import { Controller, Post } from '@nestjs/common';
import { RescueTeamsService } from './rescue-teams.service';

@Controller('rescue-teams')
export class RescueTeamsController {
  constructor(private readonly rescueTeamsService: RescueTeamsService) {}

  @Post()
  dispatch(): string {
    return this.rescueTeamsService.dispatchRescueTeam();
  }
}