class Noticias {
    constructor() {
        this.apiKey = "40e57a011b9f4af8af52aac285232f11";
        this.codigoPais = "country=us&";

    }
    cargarDatos(tipo) {
        $.ajax({
            url: this.url,
            success: function (datos) {
                console.log(datos);
                //$("pre").text(JSON.stringify(datos, null, 2));

                var results = datos.totalResults > 5 ? 5 : totalResults;

                var elemento = document.createElement("h2");
                elemento.innerHTML = tipo;
                elemento.setAttribute("id", "h2" + tipo);
                $("#h1").after(elemento);

                for (var i = 0; i < results; i++) {
                    var element = document.createElement("article");


                    var texto = datos.articles[i].publishedAt.split("T");
                    var content = "<h3>" + datos.articles[i].title + "</h3>";
                        content += "<h4>" + "Fecha de publicación: " + texto[0] + " " + texto[1].substring(0, texto[1].length - 1) + "</h4>";
                        content += "<img src=" +"\'" + datos.articles[i].urlToImage + "\'" + " alt=" + "\'Imagen relacionada con el artículo\'" + "/>";
                        
                        if(datos.articles[i].description) {
                            content += "<p><strong>" + datos.articles[i].description + "</strong></p>";
                        }

                        content += "<p>" + datos.articles[i].content + "</p>";

                    element.innerHTML = content;
                    element.setAttribute("id", tipo + i);
                    $("#h2" + tipo).after(element);



                    /* var elemento = document.createElement("article");
                    elemento.innerHTML = tipo;
                    elemento.setAttribute("id", "article" + tipo + i);
                    $("#h2" + tipo).after(elemento);

                    var elemento = document.createElement("h3");
                    elemento.setAttribute("id", "h3" + tipo + i);
                    elemento.innerHTML = datos.articles[i].title;
                    $("#article" + tipo + i).after(elemento);

                    var elemento = document.createElement("h4");
                    var texto = datos.articles[i].publishedAt.split("T");
                    elemento.innerHTML = "Fecha de publicación: " + texto[0] + " " + texto[1].substring(0, texto[1].length - 1);
                    elemento.setAttribute("id", "h4" + tipo + i);
                    $("#h3" + tipo + i).after(elemento);

                    var elemento = document.createElement("img");
                    elemento.setAttribute('src', datos.articles[i].urlToImage);
                    elemento.setAttribute('alt', "Imagen relacionada con el artículo");
                    elemento.setAttribute("id", "img" + tipo + i);
                    $("#h4" + tipo + i).after(elemento);

                    var elemento = document.createElement("p");
                    elemento.innerHTML = datos.articles[i].description.bold();
                    elemento.setAttribute("id", "p1" + tipo + i);
                    $("#img" + tipo + i).after(elemento);

                    var elemento = document.createElement("p");
                    elemento.innerHTML = datos.articles[i].content;
                    $("#p1" + tipo + i).before(elemento); */
                }
            },
            error: function () {
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