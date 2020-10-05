import { TestBed } from '@angular/core/testing';

import { SportsTeamService } from './sports-team.service';

describe('SportsTeamService', () => {
  let service: SportsTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
