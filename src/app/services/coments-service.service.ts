import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { commentInterface } from '../model/comentInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 @Injectable({
  providedIn: 'root'
})


export class ComentsServiceService {
  commentsCollection: AngularFirestoreCollection<commentInterface>;
  coment: Observable<commentInterface[]>;
  comentsDoc: AngularFirestoreDocument<commentInterface>;
  bandera: string[];
  id: string;

  constructor(public afs: AngularFirestore) { 
    this.commentsCollection = afs.collection<commentInterface>('comentarios');//aca indicmos el nombre de la coleccion
    this.coment = this.commentsCollection.snapshotChanges().pipe(

      map(post => post.map(texto => {
        const datos = texto.payload.doc.data() as commentInterface;
        const id = texto.payload.doc.id;
        console.log(id);
        //this.bandera.push(id);
        return { id, ...datos };
      }
      ))
    )
  }

  getComments() {
    return this.coment;
  }

  addComment(comentsList: commentInterface) {
    // console.log('se publicó');
    this.commentsCollection.add(comentsList);
  }

  deleteComment(comentario: commentInterface) {
    // console.log('delete publicacion');
    this.comentsDoc = this.afs.doc(`comentarios/${comentario.id}`);
    this.comentsDoc.delete();
  }
}
