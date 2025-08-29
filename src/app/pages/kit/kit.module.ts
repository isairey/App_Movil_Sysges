import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitPageRoutingModule } from './kit-routing.module';

import { KitPage } from './kit.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KitPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KitPageModule {}
