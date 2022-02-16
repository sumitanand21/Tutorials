import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'usermanagement', component: UserManageComponent, canActivate: [AuthGuard] },
{ path: 'genView', loadChildren: () => import('./pages/gen-view/gen-view.module').then(m => m.GenViewModule),
canLoad: [AuthGuard]
},
{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
