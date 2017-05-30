import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppMaskerModule } from 'brmasker-ionic';

import { ContatosFormPage } from './contatos-form';

@NgModule({
  declarations: [
    ContatosFormPage,
  ],
  imports: [
    AppMaskerModule,
    IonicPageModule.forChild(ContatosFormPage),
  ],
  exports: [
    ContatosFormPage
  ]
})
export class ContatosFormPageModule {}
