const axios = require("axios").default;
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const cron = require("node-cron");

// importamos nuestra configuracion de conexion y bd
const { MONGO_URI } = require("./config");
const { Animes } = require("./models");

// cron job que se ejecutar todos los dias a las 00:00 h
cron.schedule("0 0 * * *", async () => {
  try {
    const conexion = await mongoose.connect(MONGO_URI);
    const html = await axios.get("https://jkanime.net/");

    const $ = cheerio.load(html.data);

    // la clase bloqq hace referencia a los nuevos capitulos que se actualizan diariamente
    const episodios = $(".bloqq");

    let arregloAnimes = [];

    episodios.each((index, element) => {
      const Anime = {
        titulo: $(element)
          .children()
          .children()
          .children("h5")
          .text()
          .toString(),
        capitulo: $(element)
          .children()
          .children()
          .children("h6")
          .text()
          .replace(/\s+/g, ""),
        enlace: $(element).attr("href"),
      };

      arregloAnimes = [...arregloAnimes, Anime];
    });

    // agregamos nuevos registros a la base de datos enviando nuestro arreglo donde estan almacenados los objetos con los datos obtenidos de la pagina web
    Animes.create(arregloAnimes);
    console.log("Episodios agregados a la base de datos correctamente");
  } catch (err) {
    console.log(err);
  }
});
