import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BindingComponent } from './binding/binding.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeenameComponent } from './employeename/employeename.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:'parent', component:ParentComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent, canActivate:[AuthGuard]},
{path:'dashboard', component:DashboardComponent},
{path:'register', component:RegisterComponent},
{path:'pipe', component:PipeComponent},
{path:'directive', component:DirectiveComponent},
{path:'child', component:ParentComponent},
{path:'binding', component:BindingComponent},
{path:'employeelist', component:EmployeelistComponent},
{path:'employeename', component:EmployeenameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
