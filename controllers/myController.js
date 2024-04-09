const Palabra = require("..models/Palabras"); 

exports.inicio = (req, res) => {
    res.render("index")
};

exports.ingles = (req, res) => {
    res.render("index2"); 
};



exports.getPalabras = (req, res) => {
    Palabra.find({}, (err, palabras) => {
    if (err) {
        console.error("Error al obtener los eventos:");
        res.status(500).json({ error: "Error al obtener los eventos" });
    } else {
        res.render("index");
    }
    });
};

