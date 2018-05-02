import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/fileItem';
import { CargarImagenService } from '../../services/cargar-imagen.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];
  estaSobreDrop = false;

  constructor(public  _ci: CargarImagenService) { }

  ngOnInit() {
  }

  subirImagenes() {
    this._ci.cargarImagenes(this.archivos);
  }

  prueba(evento) {
    console.log(evento);
  }

}
