import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tableData: object[] = [
    { paciente: 'Mark', estado: 'Otto', amputacion: '@mdo', diagnostico: 'markotto@gmail.com', comuna: 'USA', institucion: 'San Francisco' },
    { paciente: 'Jacob', estado: 'Thornton', amputacion: '@fat', diagnostico: 'jacobt@gmail.com', comuna: 'France', institucion: 'Paris' },
    { paciente: 'Larry', estado: 'the Bird', amputacion: '@twitter', diagnostico: 'larrybird@gmail.com', comuna: 'Germany', institucion: 'Berlin' },
    { paciente: 'Paul', estado: 'Topolski', amputacion: '@P_Topolski', diagnostico: 'ptopolski@gmail.com', comuna: 'Poland', institucion: 'Warsaw' },
    { paciente: 'Anna', estado: 'Doe', amputacion: '@andy', diagnostico: 'annadoe@gmail.com', comuna: 'Spain', institucion: 'Madrid' }
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
