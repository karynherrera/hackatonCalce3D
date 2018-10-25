import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {

  pacientes: string;

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

}
