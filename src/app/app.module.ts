import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    InfoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
