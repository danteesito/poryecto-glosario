const Palabra = require("../models/Palabra");

exports.inicio = (req, res) => {
    res.render("index");
};

exports.español = (req, res) => {
    Palabra.find({})
        .then(palabras => {
            res.render("index2", { palabras: palabras });
        })
        .catch(error => {
            console.error("Error al obtener las palabras:", error);
            res.status(500).json({ error: "Error al obtener las palabras" });
        });
};

exports.ingles = (req, res) => {
    res.render("index3"); 
};

exports.createPalabra = (req, res) => {
    const nuevaPalabra = new Palabra(req.body);
    nuevaPalabra.save()
        .then(palabraGuardada => {
            console.log("Palabra guardada:", palabraGuardada);
            res.redirect("/espa"); 
        })
        .catch(error => {
            console.error("Error en la palabra:", error);
            res.status(500).json({ error: error.message }); 
        });
};
