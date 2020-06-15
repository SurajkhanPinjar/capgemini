import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTestComponent } from './add-test/add-test.component';
import { GetAllCenterComponent } from './get-all-center/get-all-center.component';
import { GetAllTestComponent } from './get-all-test/get-all-test.component';
import { GetAllAppointmentsComponent } from './get-all-appointments/get-all-appointments.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { GetAllTestCenterComponent } from './get-all-test-center/get-all-test-center.component';
import { ViewCenterPipe } from './view-center.pipe';
import { ViewTestPipe } from './view-test.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AdminNavComponent,
    AddCenterComponent,
    PageNotFoundComponent,
    AddTestComponent,
    GetAllCenterComponent,
    GetAllTestComponent,
    GetAllAppointmentsComponent,
    UpdateCenterComponent,
    UpdateTestComponent,
    GetAllTestCenterComponent,
    ViewCenterPipe,
    ViewTestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
