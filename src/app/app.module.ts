import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WallLoginComponent } from './wall-login/wall-login.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WallLoginComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    WallLoginComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
