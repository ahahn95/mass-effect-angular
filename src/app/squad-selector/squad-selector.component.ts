import { SquadMembersService } from './../squad-members.service';
import { Component, OnInit } from '@angular/core';
import { SquadMember } from '../SquadMember';

@Component({
  selector: 'app-squad-selector',
  templateUrl: './squad-selector.component.html',
  styleUrls: ['./squad-selector.component.scss']
})
export class SquadSelectorComponent implements OnInit {
  squadMembers: SquadMember[];

  constructor(private squadMembersService: SquadMembersService) {}

  getSquadMembers = (): void => {
    this.squadMembersService.getSquadMembers().subscribe(squadMembers => (this.squadMembers = squadMembers));
  };

  ngOnInit() {
    this.getSquadMembers();
  }
}
