import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GeolocationPage } from '../geolocation/geolocation';
import { MapsPage } from '../maps/maps';
import { CameraPage } from '../camera/camera';
import { HttpPage } from '../http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  abrirPaginaGeolocation() {
    this.navCtrl.push(GeolocationPage);
  }

  abrirPaginaMaps() {
    this.navCtrl.push(MapsPage);
  }

  abrirPaginaCamera() {
    this.navCtrl.push(CameraPage);
  }

  abrirPaginaHttp() {
    this.navCtrl.push(HttpPage);
  }

}
