import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: 'app1one', component: View1Component },
  { path: 'app1two', component: View2Component },
  { path: 'app1main', redirectTo: 'app1one' },
  { path: '', redirectTo: 'app1one',pathMatch:'full'  },
  // { path: '**', redirectTo: 'app1one'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
