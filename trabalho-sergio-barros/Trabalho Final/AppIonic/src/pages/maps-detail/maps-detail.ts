import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {
  CameraPosition, GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, Marker,
  MarkerOptions
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-maps-detail',
  templateUrl: 'maps-detail.html',
})
export class MapsDetailPage {

  public selectedMapItem: any;
  detailsPosition: LatLng;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private googleMaps: GoogleMaps,
              private geolocation: Geolocation) {
    this.selectedMapItem = navParams.get('marker');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsDetailPage');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit MapsDetailPage');
    // this.loadMap();
  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map2');
    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      console.log("GoogleMap inicializado");

      // create LatLng Position
      this.detailsPosition = new LatLng(this.selectedMapItem.acf.lt, this.selectedMapItem.acf.lg);

        // create CameraPosition
        let position: CameraPosition = {
          target: this.detailsPosition,
          zoom: this.selectedMapItem.acf.lt,
          tilt: 30
        };

        // create new marker
        let markerOptions: MarkerOptions = {
          position: this.detailsPosition,
          title: 'Localização do Sorteio',
        };

        //show new marker
        // map.addMarker(markerOptions)
        //   .then((marker: Marker) => {
        //     marker.showInfoWindow();
        //   });

        // move the map's camera to position
        map.moveCamera(position);

    }).catch(() => console.log("GoogleMap não pode ser incializado!"));
  }
}
