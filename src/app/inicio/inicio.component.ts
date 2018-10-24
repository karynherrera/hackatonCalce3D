import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tableData: object[] = [
    { paciente: 'Juan Perez', estado: 'Esperando Cavidad', amputacion: 'Izquierdo Transhumeral', diagnostico: 'Diabetes',
     comuna: 'Santiago', institucion: 'INRPAC' },
    { paciente: 'Alicia Chalk', estado: 'Esperando Cavidad', amputacion: 'Derecho Transradial', diagnostico: 'Diabetes',
     comuna: 'Santiago', institucion: 'Mutual' },
    { paciente: 'Larry Bird', estado: 'Imprimiendo', amputacion: 'Izquierdo Transtibial', diagnostico: 'Diabetes',
     comuna: 'Santiago', institucion: 'Mutual' },
    { paciente: 'Paul Topolski', estado: 'Esperando Cavidad', amputacion: '	Derecho Transtibial', diagnostico: 'Diabetes',
     comuna: 'Santiago', institucion: 'INRPAC' },
    { paciente: 'Anna Bolena', estado: 'Imprimiendo', amputacion: 'Derecho Transtibial', diagnostico: 'Diabetes',
     comuna: 'Santiago', institucion: 'Mutual' }
  ];
  private sorted = false;
  constructor() { }

  ngOnInit() {
  }

  sortBy(by: string | any): void {

    this.tableData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

}