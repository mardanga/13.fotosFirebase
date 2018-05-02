import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';
import { CargarImagenService } from './services/cargar-imagen.service';
import { NgDropZoneDirective } from './directives/ng-drop-zone.directive';


@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropZoneDirective
  ],
  imports: [
    BrowserModule, APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
    ],
  providers: [CargarImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
