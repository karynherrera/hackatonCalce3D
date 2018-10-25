import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  verScanner: Boolean = false;
  verProfile: Boolean = false;
  verInstitucion: Boolean = true;
  verPerfil: Boolean = true;
  verCrear: Boolean = true;

  constructor() { }

  ngOnInit() {
  }
  
  public viewScan(event):void { 
    //console.log('paso por el hijo al padre');
    this.verScanner = true;
    this.verProfile= true;
    this.verCrear = false;
    this.verInstitucion = false;
    console.log(this.verScanner);
  }

   viewInstitucion(event):void{
    this.verInstitucion = true;
    this.verScanner = false; 
    this.verProfile = true;
    this.verCrear = false;
  }

  viewProfile(event):void{
    this.verInstitucion = false;
    this.verScanner = false;
    this.verProfile= false; 
    this.verCrear = false;
  }

  viewCrear(event):void{
    this.verCrear = true;
    this.verInstitucion = false;
    this.verScanner = false; 
    this.verProfile = true;
  }
}
