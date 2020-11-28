class Lector {
  constructor() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    }
    else {
      var elemento = document.createElement("p");
      elemento.innerHTML = "Tu navegador no soporta el API File";
      $("h2").after(elemento);
    }


    this.coordinates = null;
  }

  leerArchivoTexto(files) {
    var lector = new FileReader();
    lector.onload = async (evento) => {
      this.coordinates = await this.getCoordinates(evento.target.result);
      var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(43.39, -5.87),
        zoom: 10,
        mapTypeId: 'terrain'
      });

      var line1 = [];
      for (var i = 0; i < 4; i++) {
        line1.push(this.coordinates[i]);
      }

      const path1 = new google.maps.Polyline({
        path: line1,
        geodesic: true,
        strokeColor: "#FF0000",
        trokeOpacity: 1.0,
        strokeWeight: 2
      });

      path1.setMap(map);

      var line2 = [];
      for (var i = 4; i < 9; i++) {
        line2.push(this.coordinates[i]);
      }

      const path2 = new google.maps.Polyline({
        path: line2,
        geodesic: true,
        strokeColor: "#FF0000",
        trokeOpacity: 1.0,
        strokeWeight: 2
      });

      path2.setMap(map);

      var line3 = [];
      for (var i = 9; i < 12; i++) {
        line3.push(this.coordinates[i]);
      }

      const path3 = new google.maps.Polyline({
        path: line3,
        geodesic: true,
        strokeColor: "#FF0000",
        trokeOpacity: 1.0,
        strokeWeight: 2
      });

      path3.setMap(map);
    }

    lector.readAsText(files[0]);
  }

  async getCoordinates(text) {
    var parser = new DOMParser();
    var json = JSON.parse(text);
    var placemarks = []

    for(var i = 0; i < 3; i++) {
      var aux = json.features[i].geometry.coordinates;
      
      for(const coord of aux) {
        placemarks.push({ lat: +coord[1], lng: +coord[0] });
      }
    }

    return placemarks;
  }
}

var lector = new Lector();