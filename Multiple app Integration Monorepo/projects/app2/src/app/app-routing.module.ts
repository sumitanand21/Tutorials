import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: 'app2one', component: View1Component },
  { path: 'app2two', component: View2Component },
  { path: 'app2main', redirectTo: 'app2one' },
  { path: '', redirectTo: 'app2one',pathMatch:'full'  },
  // { path: '**', redirectTo: 'app2one'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
