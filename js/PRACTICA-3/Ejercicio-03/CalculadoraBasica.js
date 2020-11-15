class Calculadora {
    memoria = 0;
    reset = true;
    wasNumber = false;
    constructor(){}

    digitos(arg) {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + arg;
        else {
            document.getElementById("screen").value = arg;
            this.reset = false;
        }

        this.wasNumber = true;
    }

    punto() {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + ".";
        else {
            document.getElementById("screen").value = ".";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    suma() {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "+";
        else {
            document.getElementById("screen").value = "+";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    resta() {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "-";
        else {
            document.getElementById("screen").value = "-";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    multiplicacion() {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "*";
        else {
            document.getElementById("screen").value = "*";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    division() {
        if(!this.reset)
            document.getElementById("screen").value = document.getElementById("screen").value + "/";
        else {
            document.getElementById("screen").value = "/";
            this.reset = false;
        }

        this.wasNumber = false;
    }

    mrc() {
        if(isNaN(this.memoria))
            this.memoria = 0;
        
        if(this.wasNumber)
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
            res =  parseInt(eval(x));
            this.memoria = this.memoria - res;
        }
        catch(err) {
             document.getElementById("screen").value = "Error = " + err;
        }
        
        this.reset = true;
        this.wasNumber = false;
    }

    mMas() {
        var x, res;
        x = document.getElementById("screen").value;
        try { 
            res =  parseInt(eval(x));
            this.memoria = this.memoria + res;
        }
        catch(err) {
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
        catch(err) {
             document.getElementById("screen").value = "Error = " + err;
        }
        
        this.reset = true;
        this.wasNumber = true;
    }
}

var calculadora = new Calculadora();