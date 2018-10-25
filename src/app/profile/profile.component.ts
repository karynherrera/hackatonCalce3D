import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  verScanner: Boolean = false;

  @Output() onScan: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }


  ngOnInit() {}

  viewScan(event) {
    this.verScanner = true;

    console.log(this.verScanner);
    // console.log(this.verScanner);
    this.onScan.emit(this.verScanner);
    }
}
