const axios = require("axios").default;
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const cron = require("node-cron");

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");

cron.schedule("* * * * *", async () => {
  try {
    const conexion = await mongoose.connect(MONGO_URI);
    const html = await axios.get("https://cnnespanol.cnn.com/");

    //   console.log(html.data);
    const $ = cheerio.load(html.data);
    const titulos = $(".news__title");
    //   console.log(titulos);

    let arregloNoticias = [];

    titulos.each((index, element) => {
      const Noticia = {
        titulo: $(element).text().toString(),
        enlace: $(element).children().attr("href"),
      };

      // Noticias.create(Noticia);

      arregloNoticias = [...arregloNoticias, Noticia];

      console.log("hola" + index);
    });

    Noticias.create(arregloNoticias);
  } catch (err) {
    console.log(err);
  }
});
