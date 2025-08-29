import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocuidadoPage } from './autocuidado.page';

const routes: Routes = [
  {
    path: '',
    component: AutocuidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocuidadoPageRoutingModule {}
