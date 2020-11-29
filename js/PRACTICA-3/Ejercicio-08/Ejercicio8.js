class Meteo {
    constructor(){
        this.apikey = "290fd3ced9bb2176b491526dd1208f09";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.ciudad = "Cuenca";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }
    cargarDatos(id){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){

                    var stringDatos = "<img src=http://openweathermap.org/img/wn/" + datos.weather[0].icon + "@2x.png alt=\"icono del Tiempo\"/>";
                        stringDatos += "<li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mí­nima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                    
                    $("#ul" + id).html(stringDatos);
                },
            error:function(){
                $("h4" + id).remove();
                $("ul" + id).remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe, id){
        // Crea un nuevo elemento modificando el Ã¡rbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        elemento.setAttribute("id", tipoElemento + id);
        $(insertarAntesDe).before(elemento);
    }

    mostrar() {
        this.mostrarCuenca();
        this.mostrarLlanes();
        this.mostrarFelechosa();
    }

    mostrarCuenca() {
        this.crearElemento("h4","Datos","#llanes", 1); // Crea un elemento con DOM 
        this.crearElemento("ul","","#llanes", 1); // Crea un elemento con DOM para los datos obtenidos con JSON

        this.cargarDatos(1);
    }

    mostrarLlanes() {
        this.crearElemento("h4","Datos","#felechosa", 2); // Crea un elemento con DOM 
        this.crearElemento("ul","","#felechosa", 2); // Crea un elemento con DOM para los datos obtenidos con JSON

        this.ciudad = "Llanes";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;

        this.cargarDatos(2);
    }

    mostrarFelechosa() {
        this.crearElemento("h4","Datos","#footer", 3); // Crea un elemento con DOM 
        this.crearElemento("ul","","#footer", 3); // Crea un elemento con DOM para los datos obtenidos con JSON

        this.ciudad = "Felechosa";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;

        this.cargarDatos(3);
    }
}
var meteo = new Meteo();