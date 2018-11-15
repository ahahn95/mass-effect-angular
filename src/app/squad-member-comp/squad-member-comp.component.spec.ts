import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadMemberCompComponent } from './squad-member-comp.component';

describe('SquadMemberCompComponent', () => {
  let component: SquadMemberCompComponent;
  let fixture: ComponentFixture<SquadMemberCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadMemberCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadMemberCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
