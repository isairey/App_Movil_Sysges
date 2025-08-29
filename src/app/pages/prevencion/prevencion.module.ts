import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencionPageRoutingModule } from './prevencion-routing.module';

import { PrevencionPage } from './prevencion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrevencionPage]
})
export class PrevencionPageModule {}
