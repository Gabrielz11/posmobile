import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbmanagerProvider {

  dbName = "mydb";
  dbVersion = 1;

  constructor(public http: Http) {
    console.log('DbmanagerProvider Provider');
  }

  initDB() {
    // OpenBD
    let request = window.indexedDB.open(this.dbName, this.dbVersion);

    request.onerror = function () {
      alert("Database error: " + request.error);
    };

    request.onupgradeneeded = function () {
      let db = request.result;
      let objectStore = db.createObjectStore("pessoas", {keyPath: "id", autoIncrement: true});

      objectStore.createIndex("nome", "nome");
      objectStore.createIndex("endereco", "endereco");
      objectStore.createIndex("telefone", "telefone", {unique: true});
      db.close()
    };
  }

  run(callback) {
    let request = window.indexedDB.open(this.dbName, this.dbVersion);
    request.onerror = function () {
      alert("Database error: " + request.error);
    };
    request.onsuccess = function () {
      callback(request.result)
    };
  }
}
