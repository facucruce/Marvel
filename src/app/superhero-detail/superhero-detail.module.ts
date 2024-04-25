import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroDetailPageRoutingModule } from './superhero-detail-routing.module';

import { SuperheroDetailPage } from './superhero-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [SuperheroDetailPage]
})
export class SuperheroDetailPageModule {}
