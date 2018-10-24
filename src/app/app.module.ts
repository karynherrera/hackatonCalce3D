import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WallLoginComponent,

  },
  {
    path: 'crearPaciente',
    component: CrearPacienteComponent,
  },
  {
    path: 'Inicio',
    component: InicioComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProfileComponent,
    WallLoginComponent,
    CrearPacienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileComponent,
    WallLoginComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
