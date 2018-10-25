import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  verScanner: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  viewScan(event){
    this.verScanner = true;
    console.log(this.verScanner);
    }
}
