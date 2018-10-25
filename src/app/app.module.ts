import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatButtonModule } from '@angular/material/button';

// Formulario
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { WallLoginComponent } from './wall-login/wall-login.component';
import { InstitutionComponent } from './institution/institution.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ComentarioComponent } from './scanner/comentario/comentario.component';
import { AddCommentComponent } from './scanner/add-comment/add-comment.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComentsServiceService } from 'src/app/services/coments-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'muro',
    component: InstitutionComponent
  },
  {
    path: 'principal',
    component: NavbarComponent
  },

  {
    path: 'scanner',
    component: ScannerComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
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
    WallLoginComponent,
    ScannerComponent,
    FormLoginComponent,
    InstitutionComponent,
    ProfileComponent,
    InstitutionComponent,
    AddCommentComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatCardModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatSnackBarModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule
  ],
 
  providers: [AuthService, AngularFirestore, ComentsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
