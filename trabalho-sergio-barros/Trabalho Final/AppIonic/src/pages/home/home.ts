import { Component} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PostDetailPage } from '../post-detail/post-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  url: string = 'https://apirestwp.qative.com.br/wp-json/wp/v2/posts/?categories=7';
  items: any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loadPosts();
  }

  loadPosts(){
    let loader = this.loadingCtrl.create({
      content: "Atualizando Notícias...",
    });
    loader.present();

    this.http.get(this.url)
    .map(res => res.json()).subscribe(data => {
      this.items = data;
      loader.dismiss();
    }, error => {
      let loaderError = this.loadingCtrl.create({
        content: "Falha ao conectar com o servidor!",
        duration: 5000
      });
      loader.dismiss();
      loaderError.present();
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(PostDetailPage, {
      item: item
    });
  }
}
