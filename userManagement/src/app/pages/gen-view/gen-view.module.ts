import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenViewRoutingModule } from './gen-view-routing.module';
import { GenViewComponent } from './gen-view.component';


@NgModule({
  declarations: [GenViewComponent],
  imports: [
    CommonModule,
    GenViewRoutingModule
  ]
})
export class GenViewModule { }
