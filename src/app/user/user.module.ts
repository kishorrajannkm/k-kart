import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { MaterialModule } from '../components/core/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AdminRegistrationComponent,
    CustomerRegistrationComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  providers: [
    {
      provide: TranslateService,
      useClass: TranslateService
    }
  ]
})
export class UserModule { }
