import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
  verInicio: Boolean = false;
  @Output() onInicio: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  viewInicio(event){
    this.verInicio = true;
    console.log(this.verInicio);
    this.onInicio.emit(this.verInicio);
    }
}
