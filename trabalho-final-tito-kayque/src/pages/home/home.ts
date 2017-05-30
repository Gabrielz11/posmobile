import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [Camera]
})
export class HomePage {

  base64Image : string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera) { }

  takePicture() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }

}
