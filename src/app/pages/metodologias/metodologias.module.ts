import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MetodologiasPageRoutingModule } from './metodologias-routing.module';

import { MetodologiasPage } from './metodologias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodologiasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MetodologiasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MetodologiasPageModule {}
