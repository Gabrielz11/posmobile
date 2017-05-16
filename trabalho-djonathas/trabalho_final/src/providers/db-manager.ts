import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DBManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DBManager {

  dbName = "myDB";
  dbVersion = 1;

  constructor() {}

  initDB() {
    // Abrindo o banco de dados
    let request = window.indexedDB.open(this.dbName, this.dbVersion);

    request.onerror = function (event) {
      alert("Database error: " + request.error);
    };

    request.onupgradeneeded = function (event) {
      let db = request.result;

      let objectStore = db.createObjectStore("pessoas", {keyPath: "id", autoIncrement: true});

      objectStore.createIndex("nome", "nome");
      objectStore.createIndex("endereco", "endereco");
      objectStore.createIndex("telefone", "telefone", {unique: true});

      db.close()
    };
  }

  run(callback) {
    // Abrindo o banco de dados
    let request = window.indexedDB.open(this.dbName, this.dbVersion);

    request.onerror = function (event) {
      alert("Database error: " + request.error);
    };

    request.onsuccess = function (event) {
      callback(request.result)
    };
  }
}
