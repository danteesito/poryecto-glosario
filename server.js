const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false);

mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Conectado a la base de datos correctamente");
})
.catch(() => {
    console.log("No se pudo conectar a la base de datos");
});


//localhost:3003
const port = 3003;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});