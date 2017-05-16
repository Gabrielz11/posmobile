import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PlacesService } from '../../providers/places-service';
import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';
import { Place } from '../../models/place.model';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  places: {title: string} [] = [];

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
    .then((places) => {
      this.places = places;
    });
  }

  ionLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place) {
    this.modalCtrl.create(PlacePage, place).present();
  }
}
