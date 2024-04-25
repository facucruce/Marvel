import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroDetailPage } from './superhero-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroDetailPageRoutingModule {}
