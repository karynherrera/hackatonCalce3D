import { Component, OnInit } from '@angular/core';
import { commentInterface } from '../../model/comentInterface';
import {ComentsServiceService} from '../../services/coments-service.service';
import {NgForm} from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  Comment: commentInterface = {
    fecha:'',
    comentario:'',
  }
  
  constructor(private comentServ: ComentsServiceService) { }

  ngOnInit() {
  }

  newComment(myForm: NgForm) {
        let time = new Date().getTime();
        let date = new Date(time).toLocaleString();
        this.Comment.fecha = date;
        
        this.comentServ.addComment(this.Comment); 
  }
}
