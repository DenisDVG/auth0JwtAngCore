import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/app.auth-button-component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-aihiu-u1.eu.auth0.com',
      clientId: 'HaLMXbjzzjpZ4jqfP5Oe950SJa5PRU9W'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
