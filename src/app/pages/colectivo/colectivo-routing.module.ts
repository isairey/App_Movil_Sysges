import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColectivoPage } from './colectivo.page';

const routes: Routes = [
  {
    path: '',
    component: ColectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColectivoPageRoutingModule {}
