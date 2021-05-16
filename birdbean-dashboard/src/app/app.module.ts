import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { routes } from './app.routes';
import { SignIndModule } from './sign-in/sign-in.module';
import { BaseModule } from './shared';

@NgModule({
  imports: [
    BaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true}),
    SignIndModule
  ],
  declarations: [
    AppComponent,
  ],
  exports:[AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
