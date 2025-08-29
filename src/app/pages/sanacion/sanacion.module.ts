import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanacionPageRoutingModule } from './sanacion-routing.module';

import { SanacionPage } from './sanacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SanacionPage]
})
export class SanacionPageModule {}
