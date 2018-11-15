import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SquadSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
