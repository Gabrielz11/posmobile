import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Loading, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DeviceMotion]
})
export class HomePage {
  @ViewChild("map") mapElement;
  map:any;

  acceleration:any

  constructor(public navCtrl: NavController, 
              private geolocation: Geolocation,
              public platform:Platform,
              private storage: Storage,
              public loadingController: LoadingController,
              private deviceMotion: DeviceMotion) {

  }

  ionViewDidLoad(){
    var options = {frequency:500}
    var subsAccel = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration)
      this.acceleration = acceleration.x
      if((acceleration.x <= -3 || acceleration.x >= 6) && (acceleration.y <= -6 || acceleration.y >= 7)){
        this.platform.exitApp();
        console.log("Fechou");
      }
    });
    //mostra um alerta de carregando
    let loader = this.loadingController.create({
      content: "Carregando...."
    });


    loader.present().then(() => {
      //indica que essa é ultima pagina acessada no storage
      this.storage.ready().then(() => {
        this.storage.set('ultimapaginaacessada', 'home');
      });

      this.initMap(loader);

    });


  }




  initMap(loader: Loading){

    //carrega  a localização atual do usuário e na promessa
    //carrega o google maps e as suas configurações.
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center:latLng,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP

      };




      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: 'Minha Localização'
      });
      this.map.addMarker(marker);

      loader.dismiss();



    }).catch((error) => {
      console.log('Error getting location', error);
      loader.dismiss();
    });

    loader.dismiss();



  }

}
