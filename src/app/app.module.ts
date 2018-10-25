
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
import { WallLoginComponent } from './wall-login/wall-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { InstitutionComponent } from './institution/institution.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { NavbarComponent } from "src/app/navbar/navbar.component";
import { MatCardModule } from '@angular/material/card';
import { InstitutionComponent } from './institution/institution.component';
import { ScannerComponent } from './scanner/scanner.component';

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

    path: "crearPaciente",
    component: CrearPacienteComponent
  },
  {
    path: "Inicio",
    component: InicioComponent
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
    WallLoginComponent,    
    FormLoginComponent, 
    InstitutionComponent, 
    InicioComponent,  
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CrearPacienteComponent,
    FormLoginComponent,
    InstitutionComponent
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
export class AppModule {}
