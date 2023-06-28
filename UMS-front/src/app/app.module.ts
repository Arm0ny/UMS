import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SetHeadersInterceptor} from "./interceptors/headers.interceptor";
import {SetCsrfInterceptor} from "./interceptors/csrf-cookie.interceptor";
import {CookieService} from "ngx-cookie-service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersCellComponent } from './components/users-cell/users-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UsersTableComponent,
    UsersCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetHeadersInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: SetCsrfInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
