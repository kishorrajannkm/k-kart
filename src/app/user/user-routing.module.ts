import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {
        path: 'customer',
        component: CustomerRegistrationComponent
      },
      {
        path: 'admin',
        component: AdminRegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
