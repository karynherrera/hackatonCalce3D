import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import{FormsModule} from '@angular/forms';

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
