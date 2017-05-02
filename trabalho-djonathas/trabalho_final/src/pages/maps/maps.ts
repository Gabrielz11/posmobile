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

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public googleMaps: GoogleMaps) {
    this.erro = "iniciando...";
    this.geolocation.getCurrentPosition().then((resp) => {
      this.erro = 'entrou!';
      this.coordenadas = resp.coords;
    }).catch((error) => {
      this.erro = 'Error getting location: ' + error.message;
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.coordenadas = data.coords;
    });
  }

  // Load map only after view is initialized
  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    // create LatLng object
    let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    const marker = map.addMarker(markerOptions)
      .then((marker: Marker) => {
        marker.showInfoWindow();
      });
  }
}
