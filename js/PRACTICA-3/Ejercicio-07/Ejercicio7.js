class Ocultor {
    constructor(){}

    ocultarResumen() {
        $("#resumen").toggle();
    }

    ocultarProtagonistas() {
        $("#protagonistas").toggle();
    }

    ocultarBandaSonora() {
        $("#bandaSonora").toggle();
    }

    actualizarParrafo() {
        var aux = document.getElementById("ampliar").innerHTML;
        $('#ampliar').text(aux + document.getElementById("input").value);
    }

    actualizarLista() {
        $('#lista').append("<li>" + document.getElementById("inputP").value + "</li>");
    }

    borrarUltimaFila() {
        $("#tabla tr:last").remove();
    }

    recorrerDOM() {
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumarFilasColumnas() {
        var rows = $("#tabla tr").length;
        var columns = $("#tabla tr th").length;

        document.getElementById("filasColumnas").value = rows + columns;
    }
}

var ocultor = new Ocultor();