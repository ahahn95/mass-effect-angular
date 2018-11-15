import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { SquadMember } from './SquadMember';

@Injectable({
  providedIn: 'root'
})
export class SquadMembersService {
  constructor() {}

  getSquadMembers = (): Observable<SquadMember[]> => ajax.getJSON('https://mass-effect-squad-selector.herokuapp.com');
}
