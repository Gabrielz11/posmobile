import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Place } from '../models/place.model';

/*
  Generated class for the PlacesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor(private storage: Storage) {

  }

  addPlace(place: Place) {
    this.places.push(place);
    this.storage.set('places', this.places);
  }

  getPlaces() {
    return this.storage.get('places')
    .then((places) => {
      this.places = places == null ? [] : places;
      return this.places.slice();
    });
  }

}
