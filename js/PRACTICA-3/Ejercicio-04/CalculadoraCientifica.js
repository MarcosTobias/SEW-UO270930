class Calculadora {
    memoria = 0;
    reset = true;
    wasNumber = false;
    constructor() { }

    digitos(arg) {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + arg;
        else {
            document.getElementById("screen").value = arg;
            this.reset = false;
        }

        this.wasNumber = true;
    }

    punto() {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + ".";
        else {
            document.getElementById("screen").value = ".";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    suma() {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "+";
        else {
            document.getElementById("screen").value = "+";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    resta() {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "-";
        else {
            document.getElementById("screen").value = "-";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    multiplicacion() {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "*";
        else {
            document.getElementById("screen").value = "*";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    division() {
        if (!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "/";
        else {
            document.getElementById("screen").value = "/";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    mrc() {
        if (isNaN(this.memoria))
            this.memoria = 0;

        if (this.wasNumber)
            document.getElementById("screen").value = this.memoria.toString();
        else
            document.getElementById("screen").value = document.getElementById("screen").value + this.memoria.toString();

        this.reset = false;
        this.wasNumber = true;
    }

    mMenos() {
        var x, res;
        x = document.getElementById("screen").value;
        try {
            res = parseInt(eval(x));
            this.memoria = this.memoria - res;
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = false;
    }

    mMas() {
        var x, res;
        x = document.getElementById("screen").value;
        try {
            res = parseInt(eval(x));
            this.memoria = this.memoria + res;
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = false;
    }

    borrar() {
        document.getElementById("screen").value = "0";
        this.reset = true;
        this.wasNumber = true;
    }

    igual() {
        var x;
        x = document.getElementById("screen").value;
        try {
            document.getElementById("screen").value = eval(x);
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }

    mc() {
        this.memoria = 0;
    }

    sin() {
        try {
            document.getElementById("screen").value = Math.sin(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    pi() {
        if (!this.wasNumber && !this.reset) {
            document.getElementById("screen").value = document.getElementById("screen").value + Math.PI;
        } else {
            document.getElementById("screen").value = Math.PI;
        }

        this.reset = false;
        this.wasNumber = true;
    }

    e() {
        if (!this.wasNumber && !this.reset) {
            document.getElementById("screen").value = document.getElementById("screen").value + Math.E;
        } else {
            document.getElementById("screen").value = Math.E;
        }

        this.reset = false;
        this.wasNumber = true;
    }

    cos() {
        try {
            document.getElementById("screen").value = Math.cos(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    tan() {
        try {
            document.getElementById("screen").value = Math.tan(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    asin() {
        try {
            document.getElementById("screen").value = Math.asin(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    acos() {
        try {
            document.getElementById("screen").value = Math.acos(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    atan() {
        try {
            document.getElementById("screen").value = Math.atan(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    back() {
        if (this.reset)
            document.getElementById("screen").value = "0";
        else
            document.getElementById("screen").value = document.getElementById("screen").value.substring(0, document.getElementById("screen").value.length - 1)

        if (document.getElementById("screen").value.length == 0)
            document.getElementById("screen").value = "0";
    }

    exp() {
        try {
            document.getElementById("screen").value = Math.exp(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    square() {
        try {
            document.getElementById("screen").value = Math.pow(eval(document.getElementById("screen").value), 2);
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    oneOverX() {
        try {
            document.getElementById("screen").value = 1 / eval(document.getElementById("screen").value);
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    module() {
        try {
            if (eval(document.getElementById("screen").value) < 0)
                document.getElementById("screen").value = eval(document.getElementById("screen").value) * -1;
            else
                document.getElementById("screen").value = eval(document.getElementById("screen").value);
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    exponential() {
        try {
            document.getElementById("screen").value = eval(document.getElementById("screen").value) + "* Math.pow(10, ";
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = false;
        this.wasNumber = false;
    }

    leftP() {
        try {
            document.getElementById("screen").value = document.getElementById("screen").value + "(";
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = false;
        this.wasNumber = false;
    }

    rightP() {
        try {
            document.getElementById("screen").value = document.getElementById("screen").value + ")";
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = false;
        this.wasNumber = false;
    }

    remainder() {
        try {
            document.getElementById("screen").value = document.getElementById("screen").value + "%";
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = false;
        this.wasNumber = false;
    }

    sqrt() {
        try {
            document.getElementById("screen").value = Math.sqrt(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    factorial() {
        var x;

        try {
            x = eval(document.getElementById("screen").value);
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        var res = 1;

        for (var i = 2; i <= x; i++) {
            res *= i;
        }

        document.getElementById("screen").value = res;

        this.reset = true;
        this.wasNumber = true;
    }

    pow() {
        try {
            document.getElementById("screen").value = "Math.pow(" + eval(document.getElementById("screen").value) + ",";
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = false;
        this.wasNumber = false;
    }

    pow10() {
        try {
            document.getElementById("screen").value = Math.pow(10, eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    log10() {
        try {
            document.getElementById("screen").value = Math.log10(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    ln() {
        try {
            document.getElementById("screen").value = Math.log(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }

    cbrt() {
        try {
            document.getElementById("screen").value = Math.cbrt(eval(document.getElementById("screen").value));
        }
        catch (err) {
            document.getElementById("screen").value = "Error = " + err;
        }

        this.reset = true;
        this.wasNumber = true;
    }
}



var calculadora = new CalculadoraCientifica();