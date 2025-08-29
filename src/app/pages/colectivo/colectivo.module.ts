import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColectivoPageRoutingModule } from './colectivo-routing.module';

import { ColectivoPage } from './colectivo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColectivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColectivoPage]
})
export class ColectivoPageModule {}
