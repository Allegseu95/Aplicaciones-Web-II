const { response } = require("express");
const { Categoria } = require("../models");

const obtenerCategorias = async (req, res = response) => {
  const { limite = 10, desde = 0 } = req.query;

  const query = { estado: true };

  //   const contarDocumentos = await Producto.countDocuments(query);

  //   const respuesta = await Producto.find(query);

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments(query),
    Categoria.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    categorias,
  });
};
const obtenerCategoria = async (req, res = response) => {
  const { id } = req.params;
  const categoria = await Categoria.findById(id);
  res.json(categoria);
};
const crearCategoria = async (req, res = response) => {
  const { estado, ...body } = req.body;

  const categoriaExistente = await Categoria.findOne({ nombre: body.nombre });

  if (categoriaExistente) {
    return res.status(400).json({
      msg: `La categoria ${categoriaExistente.nombre} ya existe`,
    });
  }

  const data = {
    ...body,
    nombre: body.nombre,
  };

  const categoria = new Categoria(data);
  const nuevoCategoria = await categoria.save();
  res.status(201).json(nuevoCategoria);
};
const actualizarCategoria = async (req, res = response) => {
  const { id } = req.params;
  const { estado, ...data } = req.body;
  const categoriaModificado = await Categoria.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.json(categoriaModificado);
};
const eliminarCategoria = async (req, res = response) => {
  const { id } = req.params;
  const categoriaBorrada = await Categoria.findByIdAndUpdate(
    id,
    {
      estado: false,
    },
    { new: true }
  );
  res.json(categoriaBorrada);
};

module.exports = {
  obtenerCategoria,
  obtenerCategorias,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
};
