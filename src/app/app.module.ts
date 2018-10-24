import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './inicio/tabla/table.service';

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
    Component,
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
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
