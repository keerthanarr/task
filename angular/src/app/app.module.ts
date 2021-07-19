import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PipeComponent } from './pipe/pipe.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeenameComponent } from './employeename/employeename.component';
import { EmpserviceService } from './empservice.service';

@NgModule({
  declarations: [
    AppComponent,
   
    ParentComponent,
    ChildComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    PipeComponent,
    BindingComponent,
    DirectiveComponent,
    EmployeelistComponent,
    EmployeenameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
