import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformationComponent} from './information/information.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { InfoDetailComponent} from './info-detail/info-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:name', component: InfoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
