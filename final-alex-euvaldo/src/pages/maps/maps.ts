import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage 
{
  public erro: String;
  public map: GoogleMap;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

  // Load map only after view is initialized
  ngAfterViewInit() {
   this.loadMap();
  }

  loadMap() {
  	let element: HTMLElement = document.getElementById('map');

    this.map = this.googleMaps.create(element);


    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!')

      this.map.setOptions({
        'controls': {
        'compass': true,
        'indoorPicker': true,
        'zoom': true // Only for Android
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        }
      });
    });
  }

}
