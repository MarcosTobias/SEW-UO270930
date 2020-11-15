class Pila {
    constructor(){
        this.pila = new Array();
    }

    push(value) {
        this.pila.push(value);
    }

    pop() {
        return this.pila.pop();
    }

    show() {
        var stringPila = "<ol reversed>";

        for(var i in this.pila) {
            stringPila += "<li>" + this.pila[i] + "</li>";
        }

        stringPila += "</ol>"

        return stringPila;
    }
}

class Calculadora {
    memoria = 0;
    wasDot = false;
    pila = new Pila();
    constructor(){}

    digitos(arg) {
        document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + arg;

        this.wasDot = false;
    }

    punto() {
        document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + ".";
        this.wasDot = true;
    }

    suma() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = first + second;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    resta() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = first - second;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    multiplicacion() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = first * second;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    division() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = first / second;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    borrar() {
        document.getElementById("screen").value = "";
        
        this.wasDot = false;
    }

    enter() {
        if(document.getElementById("screen").innerHTML.trim() == "") return;
        if(this.wasDot) {
            alert("Debe escribir un numero después del punto antes de esta operación")
            return;
        }
        this.pila.push(document.getElementById("screen").innerHTML);
        document.getElementById("pila").innerHTML = this.pila.show();

        document.getElementById("screen").innerHTML = "";
    }

    sin() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.sin(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    pi() {
        document.getElementById("screen").value = Math.PI;

        this.wasDot = false;
    }

    e() {
        document.getElementById("screen").value = document.getElementById("screen").value = Math.E;

        this.wasDot = false;
    }

    cos() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.cos(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    tan() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.tan(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    asin() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result;
        try {
            result = Math.asin(first);
        } catch(Exception) {
            alert("No puedes realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            this.wasDot = false;
            return;
        }
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    acos() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result;
        try {
            result = Math.acos(first);
        } catch(Exception) {
            alert("No puedes realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            this.wasDot = false;
            return;
        }
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    atan() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result;
        try {
            result = Math.atan(first);
        } catch(Exception) {
            alert("No puedes realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
                
            document.getElementById("pila").innerHTML = this.pila.show();
            this.wasDot = false;
            return;
        }
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    exp() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.exp(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    square() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.pow(first, 2);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    oneOverX() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = 1 / first;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    module() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = first < 0 ? first*-1 : first;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    exponential() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = Math.pow(first, 10*second);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    remainder() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = first % second;
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    sqrt() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.sqrt(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    factorial() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var res = 1;

        for(var i = 2; i <= first; i++) {
            res *= i;
        }
        if(isNaN(res)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(res);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    pow() {
        this.wasDot = false;
        var second = parseInt(this.pila.pop());
        var first = parseInt(this.pila.pop());
        var result = Math.pow(first, second);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);
            if(!isNaN(second))
                this.pila.push(second);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    pow10() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.pow(10, first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    log10() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.log10(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();x
    }

    ln() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.log(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }

    cbrt() {
        this.wasDot = false;
        var first = parseInt(this.pila.pop());
        var result = Math.cbrt(first);
        if(isNaN(result)) {
            alert("La pila no está en un estado para realizar esta operación")
            if(!isNaN(first))
                this.pila.push(first);

            document.getElementById("pila").innerHTML = this.pila.show();
            return;
        }
        this.pila.push(result);
        document.getElementById("pila").innerHTML = this.pila.show();
    }
}



var calculadora = new Calculadora();