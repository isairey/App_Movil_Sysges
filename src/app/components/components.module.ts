import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';
import { ViolentometroComponent } from './violentometro/violentometro.component';
import { IntroMetodologiasComponent } from '../intro-metodologias/intro-metodologias.component';
import { IntroAutodiagnosticoComponent } from './intro-autodiagnostico/intro-autodiagnostico.component';
import { IntroKitComponent } from './intro-kit/intro-kit.component';
import { IntroClavesComponent } from './intro-claves/intro-claves.component';
import { IntroSanacionComponent } from './intro-sanacion/intro-sanacion.component';
import { IntroBotiquinComponent } from './intro-botiquin/intro-botiquin.component';
import { IntroAsertivaComponent } from './intro-asertiva/intro-asertiva.component';
import { IntroPrevencionComponent } from './intro-prevencion/intro-prevencion.component';
import { IntroRecursosComponent } from './intro-recursos/intro-recursos.component';
import { MapaComponent } from './mapa/mapa.component';
import { EngancheComponent } from './enganche/enganche.component';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { RespiracionComponent } from './respiracion/respiracion.component';
import { RelajacionComponent } from './relajacion/relajacion.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TestComponent,
    ViolentometroComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent,
    IntroKitComponent,
    IntroClavesComponent,
    IntroSanacionComponent,
    IntroBotiquinComponent,
    IntroAsertivaComponent,
    IntroPrevencionComponent,
    IntroRecursosComponent,
    MapaComponent,
    EngancheComponent,
    AlarmasComponent,
    RespiracionComponent,
    RelajacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent,
    IntroKitComponent,
    IntroClavesComponent,
    IntroSanacionComponent,
    IntroBotiquinComponent,
    IntroAsertivaComponent,
    IntroPrevencionComponent,
    IntroRecursosComponent,
    MapaComponent,
    EngancheComponent,
    AlarmasComponent,
    RespiracionComponent,
    RelajacionComponent
  ],
})
export class ComponentsModule { }
