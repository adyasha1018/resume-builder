import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent} from './auth/sign-up/sign-up.component';
import { LoginComponent} from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
const routes: Routes = [
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'logIn',
    component: LoginComponent
  },
  {
    path: 'dashboard/:name',
    component: DashboardComponent
  },
  {
    path: 'charts',
    component: PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
