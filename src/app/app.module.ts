import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';
import { SquadMemberCompComponent } from './squad-member-comp/squad-member-comp.component';

@NgModule({
  declarations: [AppComponent, SquadSelectorComponent, SquadMemberCompComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
