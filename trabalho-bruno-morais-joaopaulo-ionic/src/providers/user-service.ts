import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var window:any;

@Injectable()
export class UserService {
  //public properties
  public users = [];
  public db = null;

  constructor() {

  }

  openDB() {
    this.db = window.sqlitePlugin.openDatabase({
      name: 'data3.db',
      location: 'default'
    });
    //Cria a tabela user
    this.createTable();
  }

  createTable() {
    this.db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, nome VARCHAR(100), telefone VARCHAR(20))');
    }, (e) => {
      console.log('Transaction Error', e)
    }, () => {
      console.log('Populated Database OK');
    })
  }

  inserir(user: User) {
    return new Promise(result => {
      var sql = "INSERT INTO user (nome, telefone) VALUES (?,?)";
      this.db.executeSql(sql, [user.nome, user.telefone], (r) => {
        console.log('Inserido com sucesso: ', user.nome);
        this.buscar().then(() => {
            result(true);
        })
      }, e => {
        console.log('Inserted Error', e);
        result(false);
      })
    })
  }

  apagar(user:any) {
    return new Promise((result) => {
      let sql = "DELETE FROM user WHERE id = ?";
      this.db.executeSql(sql, [user.id], (r) => {
        console.log("Excluido com sucesso");
        this.buscar().then(() => {
          result(true);
        })
      }, e => {
        console.log("Erro ao tentar excluir", e);
        result(false);
      })
    })
  }

  atualizar(user:any) {

  }

  buscar() {
    return new Promise(result => {
      this.users = [];
      let sql = "SELECT * FROM user";
      this.db.executeSql(sql, [], (res) => {
        if(res.rows.length > 0) {
          for(var i=0; i < res.rows.length; i++) {
            var item = res.rows.item(i);
            this.users.push(item);
          }
        }
        result(true);
      }, (e) => {
        console.log('Sql Query Error', e);
        result(false);
      });
    })
  }
}
