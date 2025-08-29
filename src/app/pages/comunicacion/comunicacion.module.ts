import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionPageRoutingModule } from './comunicacion-routing.module';

import { ComunicacionPage } from './comunicacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComunicacionPage]
})
export class ComunicacionPageModule {}
