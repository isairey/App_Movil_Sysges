import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodologiasPage } from './metodologias.page';

const routes: Routes = [
  {
    path: '',
    component: MetodologiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodologiasPageRoutingModule {}
