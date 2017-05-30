import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapsPage } from './maps';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB8oVgow8oHD39XeWZhvQSU00IeUBLvrUU'}),
  ],
  exports: [
    MapsPage
  ]
})
export class MapsPageModule {}
