import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from "@angular/core";
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    NavComponent,
    View1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App2SharedModule{
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
