import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
