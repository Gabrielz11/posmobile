import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TextMaskModule } from 'angular2-text-mask';

import { GameDetailPage } from './game-detail';

@NgModule({
  declarations: [
    GameDetailPage,
  ],
  imports: [
    TextMaskModule,
    IonicPageModule.forChild(GameDetailPage),
  ],
  exports: [
    GameDetailPage
  ]
})
export class GameDetailPageModule {}
