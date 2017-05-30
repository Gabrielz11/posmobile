import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { CameraPosition, GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, Marker, MarkerOptions } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

import { MapsDetailPage } from '../maps-detail/maps-detail';

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  url: string = 'https://apirestwp.qative.com.br/wp-json/wp/v2/posts/?categories=5';
  items: any;

  map: GoogleMap;
  myPosition: LatLng;
  // currentPosition: LatLng;

  // @ViewChild('map') theMap: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private http: Http,
              private googleMaps: GoogleMaps,
              private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    // this.platform.ready().then(() => {});
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit MapsPage');
    this.loadMap();
  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    this.map = this.googleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      console.log("GoogleMap inicializado");

      // active button set my location
      this.map.setMyLocationEnabled(true);

      // create LatLng object using geolocation
      // let ionic: LatLng = new LatLng(-10.1841643, -48.3318975);
      this.geolocation.getCurrentPosition().then((resp) => {
        this.myPosition = new LatLng(resp.coords.latitude, resp.coords.longitude);

        // create CameraPosition
        let position: CameraPosition = {
          target: this.myPosition,
          zoom: 5,
          tilt: 30
        };

        // create new marker
        let markerOptions: MarkerOptions = {
          position: this.myPosition,
          title: 'Sua posiçao',
        };

        //show new marker
        this.map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
        });

        // move the map's camera to position
        this.map.moveCamera(position);

        // http resquest API markers
        this.loadMapSorteios();

      }).catch((error) => {
        console.log('Falha ao obter a localização', error);
      });

      // let watch = this.geolocation.watchPosition();
      // watch.subscribe((data) => {
      //   // update corrent position p/ 1 sec
      //   this.currentPosition = new LatLng(data.coords.latitude, data.coords.longitude);
      //   console.log(this.currentPosition)
      // });

    }).catch(() => console.log("GoogleMap não pode ser incializado!"));
  }

  loadMapSorteios() {
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.items = data;

        for(let item of this.items) {
          let positionItem = new LatLng(item.acf.lt, item.acf.lg);

          let titleMarker = 'Concurso ' + item.acf.concurso +' - '+item.acf.data_sorteio;

          let markerOptions: MarkerOptions = {
            position: positionItem,
            title: titleMarker
          };

          this.map.addMarker(markerOptions)
            .then((marker: Marker) => {
              marker.showInfoWindow();
              marker.addEventListener(GoogleMapsEvent.INFO_CLICK)
                .subscribe((data) => {
                    console.log('push mapsDetailPage', data);
                    this.navCtrl.push(MapsDetailPage, {
                      marker: item
                    });
                  }
                );
            });
        }
      });
  }
}
