import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { InstitutionComponent } from './institution/institution.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WallLoginComponent, 
  }, 
  {
    path:'muro',
    component: InstitutionComponent, 
  }, 
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WallLoginComponent,    
    FormLoginComponent, 
    InstitutionComponent, 
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
