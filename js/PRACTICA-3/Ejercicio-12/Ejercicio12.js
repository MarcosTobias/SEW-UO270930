class Lector {
  constructor() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    }
    else {
      var elemento = document.createElement("p");
      elemento.innerHTML = "Tu navegador no soporta el API File";
      $("h2").after(elemento);
    }
  }

  leerArchivoTexto(files) {
    var archivo = files[0];

    var nombre = document.createElement("h3");
    nombre.id = "nombre";

    var tamaño = document.createElement("p");
    tamaño.id = "tamaño";

    var tipo = document.createElement("p");
    tipo.id = "tipo";

    var ultima = document.createElement("p");
    ultima.id = "ultima";

    var contenido = document.createElement("p");
    contenido.id = "contenido";

    var areaVisualizacion = document.createElement("p");

    var errorArchivo = document.createElement("p");
    errorArchivo.id = "errorArchivo";

    var nombre = "<p>Nombre del archivo: " + archivo.name + "</p";
    var tamaño = "<p>Tamaño del archivo: " + archivo.size + " bytes</p>";
    var tipo = "<p>Tipo del archivo: " + archivo.type + "</p>";
    var ultima = "<p>Fecha de la última modificación: " + archivo.lastModifiedDate + "</p>";
    var contenido = "<p>Contenido del archivo:</p>";

    var tipoTexto = /text.*/;
    var tipoXML = /xml.*/;
    var tipoJSON = /json.*/;

    if (archivo.type.match(tipoTexto) || archivo.type.match(tipoXML) || archivo.type.match(tipoJSON)) {
      var lector = new FileReader();
      lector.onload = function (evento) {
        areaVisualizacion.innerText = lector.result;

        var elemento = document.getElementById("content");
        elemento.innerHTML = nombre + tamaño + tipo + ultima + contenido;
        elemento.appendChild(areaVisualizacion);
      }
      lector.readAsText(archivo);

    } else {
      errorArchivo.innerText = "No se puede mostrar este tipo de archivo";
      var elemento = document.getElementById("content");
      elemento.appendChild(errorArchivo);
    }
  };
}

var lector = new Lector();