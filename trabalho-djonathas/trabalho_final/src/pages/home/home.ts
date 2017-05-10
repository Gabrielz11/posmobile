import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DeviceMotion, DeviceMotionAccelerationData} from "@ionic-native/device-motion";
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dados:DeviceMotionAccelerationData;
  public loading:boolean = true;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public deviceMotion: DeviceMotion) {
    // Watch device acceleration
    this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.dados = acceleration;
    });

    let loader = this.loadingCtrl.create({
      content: "Obtendo dados do acelerômetro...",
      duration: 10000
    });

    loader.present();

    setTimeout(() => {
      this.loading = false;
      loader.dismiss();
    }, 10000);
  }


}
