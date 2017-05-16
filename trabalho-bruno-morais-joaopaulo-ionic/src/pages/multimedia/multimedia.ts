import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RadioPlayer} from '../../providers/radio';

@Component({
  templateUrl: 'multimedia.html',
  providers: [RadioPlayer]
})
export class MultimediaPage {
  player:any;
  constructor(player: RadioPlayer) {
  	this.player = player;
  }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

  pause() {
  	this.player.pause();
  }
}
