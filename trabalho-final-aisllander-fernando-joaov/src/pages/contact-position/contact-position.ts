import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
 * Generated class for the ContactPosition page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-contact-position',
  templateUrl: 'contact-position.html',
})
export class ContactPosition {

  nome:string

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.nome = navParams.get('nome')
  }

  ngAfterViewInit() {
   this.loadMap();

  }

  generateRandomLat() {
    let min:any = -10.160923
    let max:any = -10.262761
    let highlightedNumber:any = (Math.random() * (max - min) + min).toFixed(6);

    return highlightedNumber
  }

  generateRandomLng() {
    let min:any = -48.320111;
    let max:any = -48.343325;
    let highlightedNumber:any = (Math.random() * (max - min) + min).toFixed(6);

    return highlightedNumber
  }

  loadMap() {

     // create a new map by passing HTMLElement
     let element: HTMLElement = document.getElementById('map');

     let map: GoogleMap = this.googleMaps.create(element);

     // listen to MAP_READY event
     // You must wait for this event to fire before adding something to the map or modifying it in anyway
     map.one(GoogleMapsEvent.MAP_READY).then(() => this.updateMap(map));
   }

   updateMap(map:GoogleMap){
     // create LatLng object
     let ionic: LatLng = new LatLng(this.generateRandomLat(),this.generateRandomLng());

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
       title: this.nome
     };

     map.addMarker(markerOptions)
       .then((marker: Marker) => {
          marker.showInfoWindow();
        });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPosition');
  }

}
