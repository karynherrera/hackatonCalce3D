import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  paciente: string;
  estado: string;
  amputacion: string;
  diagnostico: string;
  comuna: string;
  institucion: string;

  constructor() { }

  ngOnInit() {
    fetch('../assets/patients_directory.json')
    .then(res => res.json())
    .then(paciente => {
      console.log(paciente);
      this.paciente = paciente;
    });
  }
}
