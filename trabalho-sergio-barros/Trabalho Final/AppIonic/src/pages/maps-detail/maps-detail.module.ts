import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsDetailPage } from './maps-detail';

@NgModule({
  declarations: [
    MapsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsDetailPage),
  ],
  exports: [
    MapsDetailPage
  ]
})
export class MapsDetailPageModule {}
