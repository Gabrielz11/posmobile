import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare var cordova: any;

@Component({
  selector: 'page-usacamera',
  templateUrl: 'usacamera.html'
})
export class UsaCameraPage {
  public base64Image: string;
  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) { }

  // takePicture(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     // destinationType: this.camera.DestinationType.DATA_URL,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     saveToPhotoAlbum: true,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };
  //
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }

  public presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Onde pegar a imagem?',
     buttons: [
       {
         text: 'Carregar da Galeria',
         handler: () => {
           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
         }
       },
       {
         text: 'Tirar foto',
         handler: () => {
           this.takePicture(this.camera.PictureSourceType.CAMERA);
         }
       },
       {
         text: 'Cancelar',
         role: 'cancel'
       }
     ]
   });
   actionSheet.present();
 }

 public takePicture(sourceType) {
   // Create options for the Camera Dialog
   var options = {
     quality: 100,
     sourceType: sourceType,
     saveToPhotoAlbum: false,
     correctOrientation: true
   };

   // Get the data of an image
   this.camera.getPicture(options).then((imagePath) => {
   if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
   this.filePath.resolveNativePath(imagePath)
   .then(imagePath => {
   var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
   var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
   this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
   });
   } else {
   var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
   var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
   this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
   }
   }, (err) => {
   this.presentToast('Error while selecting image.');
   });
 }

 // Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}

// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
    this.presentToast('Gravado com sucesso no celular.');
  }, error => {
    this.presentToast('Error ao gravar arquivo.');
  });
}

private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

}
