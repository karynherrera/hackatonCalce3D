import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
  pacientes: string;
  verInicio: Boolean = false;
  @Output() onInicio: EventEmitter<any> = new EventEmitter<any>();

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

  viewInicio(event){
    this.verInicio = true;
    console.log(this.verInicio);
    this.onInicio.emit(this.verInicio);
    }
}
