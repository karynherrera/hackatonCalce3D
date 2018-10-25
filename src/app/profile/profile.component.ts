import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pacientes: string;
  verScanner: Boolean = false;

  @Output() onScan: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }


  ngOnInit() {
    // Fetch del JSON entregado
    fetch('../assets/patients_directory.json')
      .then(res => res.json())
      .then(pacientes => {
        console.log(pacientes);
        this.pacientes = pacientes;
      });
  }

  viewScan(event) {
    this.verScanner = true;

    console.log(this.verScanner);
    //console.log(this.verScanner);
    this.onScan.emit(this.verScanner);
    }
}
