import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
  pacientes: string;
  pacient=[];
  pasFil = [];
  pasFilFirst = [];
  verInicio: Boolean = false;
  @Output() onInicio: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // Fetch del JSON entregado
    fetch('../assets/patients_directory.json')
      .then(response=> response.json())
      .then(data =>{
        console.log(data);
        this.pacient = data;
        this.filData("Mutual");
        this.filDataFirst("INRPAC");
      });      
      /*.then(pacientes => {
        console.log(pacientes);
        this.pacientes = pacientes;                        
      });*/
  }
  filData(institucion:string){
    this.pacient.forEach(element => {
      console.log(element);
      if(institucion === element.institucion){
        console.log(element.institucion);  
        this.pasFil.push(element);            
      }
    });
    console.log(this.pasFil);    
  }

  filDataFirst(institucion:string){
    this.pacient.forEach(element => {
      console.log(element);
      if(institucion === element.institucion){
        console.log(element.institucion);  
        this.pasFilFirst.push(element);            
      }
    });
    console.log(this.pasFilFirst);   
  }
  
  viewInicio(event){
    this.verInicio = true;
    console.log(this.verInicio);
    this.onInicio.emit(this.verInicio);
    }
}
