import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {
  verProfile: Boolean;
  pacientes: string;
  @Output() onProfile: EventEmitter<any> = new EventEmitter<any>();
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

  viewProfile(event) {
    this.verProfile = true;
    this.onProfile.emit(this.verProfile);
    }

}
