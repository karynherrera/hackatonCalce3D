import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pacientes: string;
  paciente: string;
  estado: string;
  amputacion: string;
  diagnostico: string;
  comuna: string;
  institucion: string;

  constructor() { }

  ngOnInit() {
    fetch('../json/pacientes.json')
    .then(res => res.json())
    .then(pacientes => {
      console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      this.pacientes = pacientes;
    });
  }
}
