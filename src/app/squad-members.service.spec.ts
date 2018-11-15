import { TestBed } from '@angular/core/testing';

import { SquadMembersService } from './squad-members.service';

describe('SquadMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquadMembersService = TestBed.get(SquadMembersService);
    expect(service).toBeTruthy();
  });
});
