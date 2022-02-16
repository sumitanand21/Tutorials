import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenViewComponent } from './gen-view.component';

const routes: Routes = [{ path: '', component: GenViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenViewRoutingModule { }
