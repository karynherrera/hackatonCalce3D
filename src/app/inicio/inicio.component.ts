import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tableData: object[] = [
    { Paciente: 'Mark', Estado: 'Otto', Amputación: '@mdo', Diagnostico: 'markotto@gmail.com', Comuna: 'USA', Institución: 'San Francisco' },
    { Paciente: 'Jacob', Estado: 'Thornton', Amputación: '@fat', Diagnostico: 'jacobt@gmail.com', Comuna: 'France', Institución: 'Paris' },
    { Paciente: 'Larry', Estado: 'the Bird', Amputación: '@twitter', Diagnostico: 'larrybird@gmail.com', Comuna: 'Germany', Institución: 'Berlin' },
    { Paciente: 'Paul', Estado: 'Topolski', Amputación: '@P_Topolski', Diagnostico: 'ptopolski@gmail.com', Comuna: 'Poland', Institución: 'Warsaw' },
    { Paciente: 'Anna', Estado: 'Doe', Amputación: '@andy', Diagnostico: 'annadoe@gmail.com', Comuna: 'Spain', Institución: 'Madrid' }
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
