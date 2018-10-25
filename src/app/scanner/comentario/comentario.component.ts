import { Component, OnInit } from '@angular/core';
import { commentInterface } from '../../model/comentInterface';
import {ComentsServiceService} from '../../services/coments-service.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarios: commentInterface[];

  constructor(public commentServ:ComentsServiceService) { }

  ngOnInit() {
    this.commentServ.getComments().subscribe(publicacion=>{
      console.log(publicacion);
      this.comentarios = publicacion;
      })
  }
  delete(event, coment: commentInterface){
    this.commentServ.deleteComment(coment);
    }
}
