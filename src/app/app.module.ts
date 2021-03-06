import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomfeedcardComponent } from './custom-feed-card/customfeedcard/customfeedcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CustomfeedcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
