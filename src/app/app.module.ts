import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { WallLoginComponent } from 'src/app/wall-login/wall-login.component';

const appRoutes: Routes = [
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
    CrearPacienteComponent,
    WallLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
