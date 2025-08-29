import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

//Importación del módulo de producción de la aplicación
import { environment } from 'src/environments/environment';
//Importación de los módulos de la base de datos en Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //Se llaman a los módulos de Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
  ],
  providers:
  [
    { provide: 
    RouteReuseStrategy, 
    useClass: 
    IonicRouteStrategy}, File,
    FileTransfer],
  bootstrap: [AppComponent],
})
export class AppModule {}
