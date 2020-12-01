class Geolocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }

    verTodo() {
        var datos = '';
        datos += '<h2>Datos</h2>';
        datos += '<ul><li>Longitud: ' + this.longitud + ' grados</li>';
        datos += '<li>Latitud: ' + this.latitud + ' grados</li>';
        datos += '<li>Precisión de la latitud y longitud: ' + this.precision + ' metros</li>';
        datos += '<li>Altitud: ' + this.altitude + ' metros</li>';
        datos += '<li>Precisión de la altitud: ' + this.precisionAltitud + ' metros</li>';
        datos += '<li>Rumbo: ' + this.rumbo + ' grados</li>';
        datos += '<li>Velocidad: ' + this.velocidad + ' metros/segundo</li></ul>';


        var elemento = document.getElementById("content");
        elemento.innerHTML = datos;
    }
}
var miPosicion = new Geolocalizacion();