import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RibbonComponent} from "./ribbon/ribbon.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RibbonComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
