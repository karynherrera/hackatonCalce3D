import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder:FormBuilder, public authService:AuthService, public snackBar: MatSnackBar, private router: Router, private location: Location) { this.createFormLogin();}

  ngOnInit() {
  }
  createFormLogin() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  onLogin(){
    this.authService.login(this.formLogin.value.email, this.formLogin.value.password)    
    .then(()=>{ 
      console.log(this.formLogin.value.email);    
      this.router.navigate(['/muro']);
    })
    .catch((error)=>{  
      console.log(error);
    this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
                        ,null
                        ,{
                          duration : 3000
                        });
    });
  }
}
