import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutocuidadoPageRoutingModule } from './autocuidado-routing.module';

import { AutocuidadoPage } from './autocuidado.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutocuidadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutocuidadoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AutocuidadoPageModule {}
