import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormLoginComponent } from './form-login/form-login.component';
// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { HttpClientModule } from '@angular/common/http';

import { WallLoginComponent } from 'src/app/wall-login/wall-login.component';
import { InstitutionComponent } from './institution/institution.component';
const appRoutes: Routes = [
  {
    path: 'crearPaciente',
    component: CrearPacienteComponent,
  },
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: '',
    component: WallLoginComponent,
  },
];

@NgModule({
  declarations: [
    Component,
    AppComponent,
    InicioComponent,
    ProfileComponent,
    CrearPacienteComponent,
    WallLoginComponent,
    FormLoginComponent,
    InstitutionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
