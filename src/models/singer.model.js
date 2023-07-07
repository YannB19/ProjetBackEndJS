const dataBase = require('../db/db-connections');

const SingerConstructor = function (singer) {
    this.nom = singer.nom;
    this.nationalite = singer.nationalite;
    this.genre = singer.genre;
    this.age = singer.age;
    this.sexe = singer.sexe;
};

getAllSingers = result_bdd_request => {
    dataBase.query("SELECT * FROM singer", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};

getSingerById = result_bdd_request => {
    dataBase.query(`SELECT * FROM singer WHERE id = ${id}`, (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};

getSingerByName = result_bdd_request => {
    dataBase.query(`SELECT * FROM singer WHERE name = ${name}`, (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};
createSinger = result_bdd_request => {
    dataBase.query("INSERT INTO singer set nom = ?, nationalite = ?, genre = ?, age = ?, sexe = ?"
    [singer.nom, singer.nationalite, singer.genre, singer.age, singer.sexe], 
    (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        return;
    });
};

updateSingerById = result_bdd_request => {
    dataBase.query("UPDATE singer set nom = ?, nationalite = ?, genre = ?, age = ?, sexe = ? WHERE id = ?"
    [singer.nom, singer.nationalite, singer.genre, singer.age, singer.sexe, id], 
    (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        return;
    });
};

deleteSingerById = result_bdd_request => {
    dataBase.query(`DELETE * FROM singer WHERE id = ${id}`, (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};