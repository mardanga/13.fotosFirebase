import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FileItem } from '../models/fileItem';

@Injectable()
export class CargarImagenService {

  URLCARPETA = 'img';

  constructor(
    public db: AngularFirestore
  ) {}

cargarImagenes(archivos: FileItem[]) {
  console.log(archivos);
}

  subirImagen(nombre, url) {
   this.db.collection(this.URLCARPETA).add({nombre});
  }
}
