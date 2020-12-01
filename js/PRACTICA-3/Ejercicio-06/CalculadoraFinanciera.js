class CalculadoraFinanciera {
    constructor() { }

    calcularCuotaMensual() {
        var importe = document.getElementById("prestado").value;
        var años = document.getElementById("años").value;
        var interes = document.getElementById("iAnual").value;

        try {
            var iImporte = parseFloat(importe);
            var iAños = parseInt(años);
            var iInteres = parseFloat(interes);
            var numerator = iImporte * iInteres;
            var denominator = 1 - Math.pow((1 + iInteres), (-1 * iAños));
            var res = numerator / denominator;

            document.getElementById("cuota").value = Number(res.toFixed(2));


        } catch (Exception) {
            alert("El valor de algún campo es incorrecto");
        }

    }

    calcularInteres() {
        var importe = document.getElementById("prestado").value;
        var años = document.getElementById("años").value;
        var iAnual = document.getElementById("iAnual").value;
        var tipoInteres = document.getElementById("iTipo").value;

        try {
            var iImporte = parseFloat(importe);
            var iAños = parseInt(años);
            var IIAnual = parseFloat(iAnual);

            if (tipoInteres == 1) {
                var res = iImporte * iAnual * años;
                document.getElementById("resultado").value = res;
            } else {
                var res = iImporte * Math.pow((1 + IIAnual), iAños);
                document.getElementById("resultado").value = Number(res.toFixed(2));
            }

        } catch (Exception) {
            alert("El valor de algún campo es incorrecto")
        }
    }
}

var calculadora = new CalculadoraFinanciera();