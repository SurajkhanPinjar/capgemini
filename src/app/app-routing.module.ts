import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddTestComponent } from './add-test/add-test.component';
import { GetAllCenterComponent } from './get-all-center/get-all-center.component';
import { GetAllTestComponent } from './get-all-test/get-all-test.component';
import { GetAllAppointmentsComponent } from './get-all-appointments/get-all-appointments.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { GetAllTestCenterComponent } from './get-all-test-center/get-all-test-center.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'admin-nav', component: AdminNavComponent},
  {path: 'add-center', component: AddCenterComponent},
  {path: 'add-test/:centerId', component: AddTestComponent},
  {path: 'update-center/:centerId', component: UpdateCenterComponent},
  {path: 'update-test/:testId', component: UpdateTestComponent},
  {path: 'get-all-center', component: GetAllCenterComponent},
  {path: 'get-all-test', component: GetAllTestComponent},
  {path: 'get-all-test-center/:centerId', component: GetAllTestCenterComponent},
  {path: 'get-all-appointments', component :GetAllAppointmentsComponent},

  {path: '**', component: PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
