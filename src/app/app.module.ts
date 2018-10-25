
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormLoginComponent } from './form-login/form-login.component';
// import {MatButtonModule} from '@angular/material/button';
// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { WallLoginComponent } from 'src/app/wall-login/wall-login.component';
import { InstitutionComponent } from './institution/institution.component';
import { ScannerComponent } from './scanner/scanner.component';
// import { MatCardModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'crearPaciente',
    component: CrearPacienteComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {

    path: '',
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
    Component,
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CrearPacienteComponent,
    WallLoginComponent,

    FormLoginComponent,
    InstitutionComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
   // MatCardModule,
   // MatButtonModule,
   // ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
