import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the Maps page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})

export class MapsPage {

  public coordenadas: Coordinates;
  public erro: String;
  public map: GoogleMap;
  public marker: Marker;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public googleMaps: GoogleMaps) {

  }

  // Load map only after view is initialized
  ngAfterViewInit() {
    this.loadMap();
  }

  createMarker() {
    // create LatLng object
    let latLng: LatLng = new LatLng(-10.1783,-48.3376);

    // create CameraPosition
    let position: CameraPosition = {
      target: latLng,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    this.map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: latLng,
      title: 'Você está aqui!'
    };

    this.map.addMarker(markerOptions).then((marker: Marker) => {
        marker.showInfoWindow();
        this.marker = marker;
      });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordenadas = resp.coords;
      let latLng: LatLng = new LatLng(this.coordenadas.latitude, this.coordenadas.longitude);
      this.marker.setPosition(latLng);

      let position: CameraPosition = {
        target: latLng,
        zoom: 18,
        tilt: 30
      };
      this.map.moveCamera(position);
    }).catch((error) => {
      this.erro = 'Error getting location: ' + error.message;
    });
  }

  loadMap() {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>
    //
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    this.map = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => this.createMarker());
  }
}
