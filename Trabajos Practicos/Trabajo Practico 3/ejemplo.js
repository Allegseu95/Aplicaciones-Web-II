const mongo = require("mongoose");
const conexion = `mongodb+srv://allegseu:allegseu02@clustermongodb.bmont.mongodb.net/users?retryWrites=true&w=majority`;

// mongo
//   .connect(conexion, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((db) => {
//     console.log("Conexion exitosa a BD de MongoDB Atlas", db.connection.host);
//   })
//   .catch((err) => {
//     console.log("Existe un error de conexion" + err);
//   });

// const Usuario = mongo.model("Usuario", { nombre: String });

// // usuario1.save();
// // Usuario.find().then(console.log);

// async function crearMostrar(nombre) {
//   const usuario1 = new Usuario({ nombre: `${nombre}` });
//   await usuario1.save();
//   Usuario.find().then(console.log);
// }

// crearMostrar("Dolores Muñoz");

// usuario1.save().then((res) => {
//   Usuario.find().then(console.log);
// });

(async () => {
  await mongo.connect(conexion, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
  const Usuario = mongo.model("Usuario", { nombre: String });
  const usuario1 = new Usuario({ nombre: `Alex Santacruz` });
  const guardo = await usuario1.save();
  const respuesta = await Usuario.find();
  console.log(respuesta);
})();
