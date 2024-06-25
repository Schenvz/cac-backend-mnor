function validarAltaCliente() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;

  if (nombre === "" || email === "" || telefono === "") {
    alert("Todos los campos son obligatorios.");
    return false;
  }
  return true;
}

function validarBajaCliente() {
  var idCliente = document.getElementById("idCliente").value;

  if (idCliente === "") {
    alert("El ID del cliente es obligatorio.");
    return false;
  }
  return true;
}

function validarModificarCliente() {
  var idClienteModificar = document.getElementById("idClienteModificar").value;
  var nuevoNombre = document.getElementById("nuevoNombre").value;
  var nuevoEmail = document.getElementById("nuevoEmail").value;
  var nuevoTelefono = document.getElementById("nuevoTelefono").value;

  if (
    idClienteModificar === "" ||
    nuevoNombre === "" ||
    nuevoEmail === "" ||
    nuevoTelefono === ""
  ) {
    alert("Todos los campos son obligatorios.");
    return false;
  }
  return true;
}
