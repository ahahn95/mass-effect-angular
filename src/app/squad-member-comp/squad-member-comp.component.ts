import { SquadMember } from './../SquadMember';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-squad-member-comp',
  templateUrl: './squad-member-comp.component.html',
  styleUrls: ['./squad-member-comp.component.scss']
})
export class SquadMemberCompComponent implements OnInit {
  @Input() member: SquadMember;
  constructor() {}

  ngOnInit() {}
}
