import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { EmplyeeListComponent } from './Component/emplyee-list/emplyee-list.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { NotFondComponent } from './Component/not-fond/not-fond.component';
import { RegisterComponent } from './Component/register/register.component';
import { ReactiveFormComponent } from './Component/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'emplyee-list', component: EmplyeeListComponent },
  // { path: 'emplyee-ditels/:id', component: EmplyeeDitelsComponent },
  // { path: 'emplyee-ditels', component: EmplyeeDitelsComponent },
  { path: 'reactive-form', component: ReactiveFormComponent},

  // { path: 'emplyee/:id', component: EmplyeeDitelsComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
