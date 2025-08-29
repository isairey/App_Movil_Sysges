import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitPage } from './kit.page';

const routes: Routes = [
  {
    path: '',
    component: KitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitPageRoutingModule {}
