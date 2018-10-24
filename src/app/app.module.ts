import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {MatButtonModule} from '@angular/material/button';
// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { WallLoginComponent } from 'src/app/wall-login/wall-login.component';
import {MatCardModule} from '@angular/material/card';
import { InstitutionComponent } from './institution/institution.component';
import { ScannerComponent } from './scanner/scanner.component';
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
    path:'',
    component: WallLoginComponent, 
  }, 
  {
    path: 'scanner',
    component: ScannerComponent,
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProfileComponent,
    CrearPacienteComponent,
    WallLoginComponent,
    FormLoginComponent, InstitutionComponent, ScannerComponent, 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
