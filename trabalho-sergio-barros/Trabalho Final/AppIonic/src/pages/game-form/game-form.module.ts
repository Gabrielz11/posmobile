import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GameFormPage } from './game-form';
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [
    GameFormPage,
  ],
  imports: [
    TextMaskModule,
    IonicPageModule.forChild(GameFormPage)
  ],
  exports: [
    GameFormPage
  ]
})
export class GameFormPageModule {
}
