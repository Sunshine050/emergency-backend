import { Injectable } from '@nestjs/common';

@Injectable()
export class RescueTeamsService {
  dispatchRescueTeam(): string {
    return 'Rescue team dispatched!';
  }
}