import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CompinComponent } from './compin/compin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'view', component:CompinComponent},
{path:'viewchild', component:ParentComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent, canActivate:[AuthGuard]},
{path:'dashboard', component:DashboardComponent},

{path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
