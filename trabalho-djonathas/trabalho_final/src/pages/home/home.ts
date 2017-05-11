import {Component} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {DeviceMotion, DeviceMotionAccelerationData} from "@ionic-native/device-motion";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dados: DeviceMotionAccelerationData;
  public loading: boolean = true;
  subscription:Subscription;

  constructor(public loadingCtrl: LoadingController, public deviceMotion: DeviceMotion) {}

  ionViewDidEnter() {
    // Watch device acceleration
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
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

  ionViewDidLeave() {
    this.subscription.unsubscribe()
  }
}
