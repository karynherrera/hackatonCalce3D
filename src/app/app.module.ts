import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import{FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  {
    path:'',
    component: WallLoginComponent, 

  },
  {
    path:'crearPaciente',
    component: CrearPacienteComponent, 
    
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WallLoginComponent,   
    CrearPacienteComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
