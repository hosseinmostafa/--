import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// import withInterceptorsFromDi, provideHttpClient 3la shan httpclient 
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
// import reactiveFormMdule
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmplyeeListComponent } from './Component/emplyee-list/emplyee-list.component';
import { EmplyeeDitelsComponent } from './Component/emplyee-ditels/emplyee-ditels.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { NotFondComponent } from './Component/not-fond/not-fond.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { RegisterComponent } from './Component/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './Component/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplyeeListComponent,
    EmplyeeDitelsComponent,
    LogInComponent,
    NotFondComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    // add reactiveFormMdule
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
