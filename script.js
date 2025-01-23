const formulario = document.getElementById("form-evento");
const tablaEventos = document.getElementById("tabla-eventos");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fechaInicio = document.getElementById("fecha-inicio").value;
  const fechaFin = document.getElementById("fecha-fin").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const encargado = document.getElementById("encargado").value;
  const telefono = document.getElementById("telefono").value;
  const confirmacion = document.getElementById("confirmacion").checked;

  const nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${fechaInicio}</td>
    <td>${fechaFin}</td>
    <td>${ubicacion}</td>
    <td>${encargado}</td>
    <td>${telefono}</td>
    <td>${confirmacion ? "Sí" : "No"}</td>
  `;

  tablaEventos.appendChild(nuevaFila);
  formulario.reset();
});
