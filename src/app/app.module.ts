import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { InstitutionComponent } from './institution/institution.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  {
    path:'',
    component: WallLoginComponent, 
  }, 
  {
    path:'muro',
    component: InstitutionComponent, 
  },  
  {
    path: 'Inicio',
    component: InicioComponent,
  }  
];

@NgModule({
  declarations: [
    AppComponent,    
    WallLoginComponent,    
    FormLoginComponent, 
    InstitutionComponent, 
    InicioComponent,  
    AppComponent,
    InicioComponent,
    ProfileComponent,
    CrearPacienteComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatCardModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
