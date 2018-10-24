import { Component, OnInit } from '@angular/core';
import { TableService } from './tabla/table.service';
import { Table } from './tabla/table';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  styles: []
})
export class InicioComponent implements OnInit {

pacientes: Table[];

constructor(private tservice: TableService) { }

ngOnInit() {
  this
    .tservice
    .getPacientes()
    .subscribe((data: Table[]) => {
      this.pacientes = data;
    });
}

}
