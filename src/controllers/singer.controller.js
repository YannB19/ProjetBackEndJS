const singerModel = require('../models/singer.model');

getAllSingers = (request, response) => {
    singerModel.getAllSingers((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de récupérer la table singer."
        });
        else response.send(data);
    });
};

getSingerById = (request, response) => {
    singerModel.getSingerById((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de récupérer dans la table singer."
        });
        else response.send(data);
    });
};

getSingerByName = (request, response) => {
    singerModel.getSingerByName((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de récupérer dans la table singer."
        });
        else response.send(data);
    });
};

createSinger = (request, response) => {
    singerModel.createSinger((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de créer dans la table singer."
        });
        else response.send(data);
    });
};

updateSingerById = (request, response) => {
    singerModel.updateSingerById((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de mettre à jour la table singer."
        });
        else response.send(data);
    });
};

deleteSingerById = (request, response) => {
    singerModel.deleteSingerById((error, data) => {
        if (error)
        response.status(500).send({
            message:
                error.message || "Une erreur est survenue en essayant de supprimer de la table singer."
        });
        else response.send(data);
    });
};