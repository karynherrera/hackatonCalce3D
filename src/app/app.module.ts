import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path:'',
    component: WallLoginComponent, 
  }, 
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WallLoginComponent,    
    FormLoginComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
