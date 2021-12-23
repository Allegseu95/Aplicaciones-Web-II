window.addEventListener("load", () => {
  let htmlGenerado = "";

  htmlGenerado += `<div class="row">`;
  htmlGenerado += `<label class="form-label" for="txtId">ID:</label>`;
  htmlGenerado += `<input class="form-control" type="text" id="txtId" readonly />`;
  htmlGenerado += `</div>`;
  htmlGenerado += `<div class="row my-3">`;
  htmlGenerado += `<div class="col-3">`;
  htmlGenerado += `<label class="form-label" for="txtNombre">Nombre:</label>`;
  htmlGenerado += `<input class="form-control" type="text" id="txtNombre" />`;
  htmlGenerado += `</div>`;
  htmlGenerado += `<div class="col-3">`;
  htmlGenerado += `<label class="form-label" for="txtPrecio">Precio:</label>`;
  htmlGenerado += `<input class="form-control" type="text" id="txtPrecio" />`;
  htmlGenerado += `</div>`;
  htmlGenerado += `<div class="col-3">`;
  htmlGenerado += `<label class="form-label" for="txtCosto">Costo:</label>`;
  htmlGenerado += `<input class="form-control" type="text" id="txtCosto" />`;
  htmlGenerado += `</div>`;
  htmlGenerado += `<div class="col-3">`;
  htmlGenerado += `<label class="form-label" for="txtMinimo">Minimo:</label>`;
  htmlGenerado += `<input class="form-control" type="text" id="txtMinimo" />`;
  htmlGenerado += `</div>`;
  htmlGenerado += `</div>`;
  htmlGenerado += `<button class="mx-2 btn btn-primary" id="btnNuevo">Nuevo</button>`;
  htmlGenerado += `<button class="mx-2 btn btn-success" id="btnGrabar">Grabar</button>`;
  htmlGenerado += `<button class="mx-2 btn btn-warning" id="btnModificar">Modificar</button>`;
  htmlGenerado += `<button class="mx-2 btn btn-info" id="btnConsultar">Consultar</button>`;
  htmlGenerado += `<button class="mx-2 btn btn-danger" id="btnEliminar">ELiminar</button>`;
  htmlGenerado += `<div id="divContenido"></div>`;

  htmlCuerpo.innerHTML = htmlGenerado;

  btnNuevo.addEventListener("click", () => {
    txtId.value = "";
    txtNombre.value = "";
    txtPrecio.value = "";
    txtCosto.value = "";
    txtMinimo.value = "";
  });

  btnGrabar.addEventListener("click", () => {
    let url = `http://localhost:5000/v1/inventario/api/productos`;
    let data = {
      nombre: txtNombre.value,
      precio: txtPrecio.value,
      costo: txtCosto.value,
      minimo: txtMinimo.value,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  btnModificar.addEventListener("click", () => {
    let url = `http://localhost:5000/v1/inventario/api/productos/${txtId.value}`;
    let data = {
      nombre: txtNombre.value,
      precio: txtPrecio.value,
      costo: txtCosto.value,
      minimo: txtMinimo.value,
    };
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  btnConsultar.addEventListener("click", () => {
    let url = `http://localhost:5000/v1/inventario/api/productos`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let tabla = `<table class="table table-bordered table-striped my-3 table-hover" border=1>`;

        for (const item in data.productos) {
          const actual = data.productos[item];
          tabla += `<tr>`;
          tabla += `<td> <button class='btn btn-outline-info actualizar' value='${actual._id}'>${actual.nombre}</button>`;
          tabla += `<td>${actual.precio}`;
          tabla += `<td>${actual.costo}`;
          tabla += `<td>${actual.minimo}`;
          tabla += `</tr>`;
        }
        tabla += "</table>";
        divContenido.innerHTML = tabla;

        document.querySelectorAll(".actualizar").forEach((e) => {
          e.addEventListener("click", () => {
            fetch(`${url}/${e.value}`)
              .then((res) => res.json())
              .then((data) => {
                txtId.value = data._id;
                txtNombre.value = data.nombre;
                txtPrecio.value = data.precio;
                txtCosto.value = data.costo;
                txtMinimo.value = data.minimo;
              });
          });
        });
      });
  });

  btnEliminar.addEventListener("click", () => {
    let url = `http://localhost:5000/v1/inventario/api/productos/${txtId.value}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
});
