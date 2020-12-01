class Lector {
    constructor(){
      if (window.File && window.FileReader && window.FileList && window.Blob) 
      {  
      }
      else {
        var elemento = document.createElement("p"); 
        elemento.innerHTML = "Tu navegador no soporta el API File";
        $("h2").after(elemento);
      }
    }

    leerArchivoTexto(files) {

      $("#nombre").remove();
      $("#tamaño").remove();
      $("#tipo").remove();
      $("#ultima").remove();
      $("#contenido").remove();
      $("#areaVisualizacion").remove();
      $("#errorArchivo").remove();

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
    areaVisualizacion.id = "areaVisualizacion";

    var errorArchivo = document.createElement("p");
    errorArchivo.id = "errorArchivo";

    nombre.innerText = "Nombre del archivo: " + archivo.name;
    tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
    tipo.innerText = "Tipo del archivo: " + archivo.type;
    ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
    contenido.innerText="Contenido del archivo:";

    var tipoTexto = /text.*/;
    var tipoXML = /xml.*/;
    var tipoJSON = /json.*/;

      if(archivo.type.match(tipoTexto)) {
          var lector = new FileReader();
          lector.onload = function (evento) {
            areaVisualizacion.innerText = lector.result;
          }      
          lector.readAsText(archivo);

      } else if(archivo.type.match(tipoXML)) {
        var lector = new FileReader();
        lector.onload = function (evento) {
          areaVisualizacion.innerText = lector.result;
        }      
        lector.readAsText(archivo);
      } else if(archivo.type.match(tipoJSON)) {
        var lector = new FileReader();
        lector.onload = function (evento) {
          areaVisualizacion.innerText = lector.result;
        }      
        lector.readAsText(archivo);
      } else {
        errorArchivo.innerText = "No se puede mostrar este tipo de archivo";
      }
        
    $("input").after(errorArchivo);
    $("input").after(areaVisualizacion);
    $("input").after(contenido);
    $("input").after(ultima);
    $("input").after(tipo);
    $("input").after(tamaño);
    $("input").after(nombre);

  };
}

var lector = new Lector();