class Noticias {
    constructor(){
        this.apikey = "40e57a011b9f4af8af52aac285232f11";
        this.codigoPais = "country=es&";
        this.url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=40e57a011b9f4af8af52aac285232f11';
    }
    cargarDatos(){
        $.ajax({
            dataType: "JSON",
            url: this.url,
            method: 'GET',
            mode: 'no-cors',
            credentials: 'same-origin',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2));
                    
                    
                    //$("#p" + id).html(stringDatos);
                },
            error:function(){
                $("pre").remove();
                //$("h4" + id).remove();
                //$("p" + id).remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    mostrar() {
        //this.crearElemento("h4","Datos","#footer");
        //this.crearElemento("p","","#footer");
        //this.crearElemento("pre", "", "#footer");
        //this.cargarDatos();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=Cuenca,ES&units=metric&lang=es&APPID=290fd3ced9bb2176b491526dd1208f09";
        var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=40e57a011b9f4af8af52aac285232f11';
        /* var req = new Request(url);
        fetch(req)
         .then(function(response) {
        console.log(response.json());
        }) */

        /* var aux = fetch(url, {
            mode: 'no-cors',
            credentials: 'same-origin'
            }).then(function(response){
                console.log(response.json());
            }); */

            /* var aux = fetch(url, {
                mode: 'no-cors',
                credentials: 'same-origin'
                }); */

                $.ajax({
                    url:
                      url,
                    method: "GET",
                    error: function() {
                      console.log("fucked");
                    },
                    success: function(data) {
                      processData(data);
                    }
                  });
    
    }
}
var noticias = new Noticias();