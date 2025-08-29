import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanacionPage } from './sanacion.page';

const routes: Routes = [
  {
    path: '',
    component: SanacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanacionPageRoutingModule {}
