import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  public sqlite: SQLite;
  public database: SQLiteObject;
  public isOpen: boolean;
  public arr = [];

  constructor() {
    console.log('DatabaseProvider');

    if (!this.isOpen) {
      this.sqlite = new SQLite();
      this.sqlite.create({
        name: "data.db",
        location: "default"
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.database.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT)", []);
          this.database.executeSql("CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, numbers INTEGER, concurso INTEGER, data_sorteio TEXT)", []);
          this.isOpen = true;
        });
    }
  }

  ////////////////////////////////////////////////////////
  //USERS
  ////////////////////////////////////////////////////////

  public getUsers() {
    return new Promise((resolve, reject) => {
      this.database.executeSql("SELECT * FROM users", [])
        .then((data) => {
          let users = [];
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              users.push({
                id: data.rows.item(i).id,
                nome: data.rows.item(i).nome,
                email: data.rows.item(i).email
              });
            }
          }
          resolve(users);
        }, (error) => {
          reject(error);
        });
    });
  }

  public createUser(nome: string, email: string) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("INSERT INTO users (nome, email) VALUES (?, ?)", [nome, email])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public updateUser(nome: string, email: string, id: number) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("UPDATE users SET nome=?, email=? WHERE id=?", [nome, email, id])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public deleteUser(id: number) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("DELETE FROM users WHERE id=?", [id])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  ////////////////////////////////////////////////////////
  //GAMES
  ////////////////////////////////////////////////////////

  public getGames() {
    return new Promise((resolve, reject) => {
      this.database.executeSql("SELECT * FROM games", [])
        .then((data) => {
          let games = [];
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              games.push({
                id: data.rows.item(i).id,
                numbers: data.rows.item(i).numbers,
                concurso: data.rows.item(i).concurso,
                data_sorteio: data.rows.item(i).data_sorteio
              });
            }
          }
          resolve(games);
        }, (error) => {
          reject(error);
        });
    });
  }

  public createGame(numbers: number, concurso: number, data_sorteio: string) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("INSERT INTO games (numbers, concurso, data_sorteio) VALUES (?, ?, ?)", [numbers, concurso, data_sorteio])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public updateGame(numbers: number, concurso: number, data_sorteio: string, id: number) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("UPDATE games SET numbers=?, concurso=?, data_sorteio=? WHERE id=?", [numbers, concurso, data_sorteio, id])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public deleteGame(id: number) {
    return new Promise((resolve, reject) => {
      this.database.executeSql("DELETE FROM games WHERE id=?", [id])
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

}
