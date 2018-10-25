import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  verScanner: Boolean = false;
  verProfile: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  
  public viewScan(event):void { 
    //console.log('paso por el hijo al padre');
    this.verScanner = true;
    this.verProfile= false;
    console.log(this.verScanner);
  }

}
