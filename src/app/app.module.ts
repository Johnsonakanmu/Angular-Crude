import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DividerModule } from 'primeng/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { ApiService } from './shared/api.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashComponent,
    LoginComponent,
    SignupComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    DividerModule,
    ButtonModule,
    BrowserAnimationsModule,
    


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
