import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DBManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DBManager {

  constructor() {
    console.log('Hello DBManager Provider');
  }

  initDB() {
    // Abrindo o banco de dados
    let request = window.indexedDB.open("myDB", 1);

    request.onerror = function (event) {
      alert("Database error: " + request.error);
    };

    request.onupgradeneeded = function (event) {
      let db = request.result;

      let objectStore = db.createObjectStore("pessoas", {autoIncrement: true});

      objectStore.createIndex("nome", "nome");
      objectStore.createIndex("telefone", "telefone", {unique: true});
    };
  }

  run(funcao) {
    // Abrindo o banco de dados
    let request = window.indexedDB.open("myDB", 1);

    request.onerror = function (event) {
      alert("Database error: " + request.error);
    };

    request.onsuccess = function (event) {
      let db = request.result;
      funcao(db)
    };
  }
}
