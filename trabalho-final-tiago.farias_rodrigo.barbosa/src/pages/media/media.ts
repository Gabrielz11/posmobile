import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
  providers: [ MediaPlugin ]
})
export class MediaPage {
    private file: MediaObject;

    constructor(public navCtrl: NavController, public media: MediaPlugin) {
        const onStatusUpdate = (status) => console.log(status);
        const onSuccess = () => console.log('Operação executada com sucesso.');
        const onError = (error) => console.error('Erro: ' + error.message + ' código: ' + error.code);

         // Para Executar via browser
        //const path = '/assets/files/policia.mp3';

        // Para Executar no Device
        const path = '/android_asset/www/assets/files/policia.mp3';
        this.file = this.media.create(path, onStatusUpdate, onSuccess, onError);
    }

    ionViewWillLeave() {
        this.stopFile();
    }

    public playFile(): void {
        this.file.play();
    }

    public pauseFile(): void {
        this.file.pause();
    }

    public stopFile(): void {
        this.file.stop();
    }
    public setVolume(): void{
      this.file.setVolume(0.5);

    }
}
