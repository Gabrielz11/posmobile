import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture } from '@ionic-native/media-capture';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'status',
  templateUrl: 'status.html'
})

/**
 * Grava e exibe um video
 */
export class Status {

  @ViewChild('myvideo') myVideo: any;



  constructor(public navCtrl: NavController, private mediaCapture: MediaCapture,
              private camera: Camera,
              private storage: Storage) {

  }

  ionViewDidLoad(){

    //indica que essa é ultima pagina acessada no storage
    this.storage.ready().then(() => {
      this.storage.set('ultimapaginaacessada', 'status');
    });

  }

  /**
   * Ao clicar no botão a ativa a gravação de vídeo do celular e salva na
   * memória interno do celular e já manda exibir o video
   */
  startrecording() {



    var options = { limit: 1, duration: 15 };

    var pathVideo: string;
    pathVideo = "";


    var video = this.myVideo.nativeElement;

    this.mediaCapture.captureVideo(options).then(function(videoData) {


      pathVideo = videoData[0].fullPath.toString();



      pathVideo = pathVideo.replace("file://", "");
      video.src = pathVideo;
      video.play();




    }, function(err) {
      console.log(err)
    });








  }


  /**
   * Em desuso
   * Seleciona da memória interna o video e reproduz
   */
  selectvideo() {
    let video = this.myVideo.nativeElement;
    var options = {
      sourceType: 2,
      mediaType: 1
    };

    this.camera.getPicture(options).then((data) => {
      video.src = data;
      video.play();
    })
  }


}
