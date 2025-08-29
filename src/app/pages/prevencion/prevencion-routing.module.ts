import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencionPage } from './prevencion.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencionPageRoutingModule {}
