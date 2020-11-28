class Noticias {
    constructor(){
        this.apiKey = "40e57a011b9f4af8af52aac285232f11";
        this.codigoPais = "country=us&";
        
    }
    cargarDatos(tipo){
        $.ajax({
            url: this.url,
            success: function(datos){
                console.log(datos);
                    //$("pre").text(JSON.stringify(datos, null, 2));
                    
                    var results = datos.totalResults > 5 ? 5 : totalResults;

                    var elemento = document.createElement("h2");
                    elemento.innerHTML = tipo;
                    $("#footer").before(elemento);

                    for(var i = 0; i < results; i++) {
                        var elemento = document.createElement("h3"); 
                        elemento.innerHTML = datos.articles[i].title;
                        $("#footer").before(elemento);

                        var elemento = document.createElement("h4"); 
                        var texto = datos.articles[i].publishedAt.split("T");
                        elemento.innerHTML = "Fecha de publicación: " + texto[0] + " " + texto[1].substring(0, texto[1].length - 1);
                        $("#footer").before(elemento);
                        
                        var elemento = document.createElement("img");
                        elemento.setAttribute('src', datos.articles[i].urlToImage);
                        elemento.setAttribute('alt', "Imagen relacionada con el artículo"); 
                        $("#footer").before(elemento);

                        var elemento = document.createElement("p"); 
                        elemento.innerHTML = datos.articles[i].description.bold();
                        $("#footer").before(elemento);

                        var elemento = document.createElement("p"); 
                        elemento.innerHTML = datos.articles[i].content;
                        $("#footer").before(elemento);

                        //$("#p" + id + i).html(stringDatos);
                    }
                },
            error:function(){
                console.log("fallo");
                }
        });
    }

    mostrar() {
        this.url = 'http://newsapi.org/v2/top-headlines?' + this.codigoPais + 'category=sports&apiKey=' + this.apiKey;
        this.cargarDatos("Sports");

        //this.crearElemento("pre", "", "#footer", 1);

        this.url = 'http://newsapi.org/v2/top-headlines?' + this.codigoPais + 'category=technology&apiKey=' + this.apiKey;
        this.cargarDatos("Technology");

        this.url = 'http://newsapi.org/v2/top-headlines?' + this.codigoPais + 'category=general&apiKey=' + this.apiKey;
        this.cargarDatos("General");

        this.url = 'http://newsapi.org/v2/top-headlines?' + this.codigoPais + 'category=health&apiKey=' + this.apiKey;
        this.cargarDatos("Health");

        this.url = 'http://newsapi.org/v2/top-headlines?' + this.codigoPais + 'category=entertainment&apiKey=' + this.apiKey;
        this.cargarDatos("Entertainment");
    }
}
var noticias = new Noticias();