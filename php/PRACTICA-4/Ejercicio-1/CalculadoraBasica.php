<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="viewport" content="width = device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <title>Calculadora Básica</title>
    <link rel="stylesheet" href="CalculadoraBasica.css" />
</head>

<body>
    <h1>Calculadora básica</h1>
    <?php
    class Calculadora
    {
        private $memoria = 0;
        private $reset = true;
        private $wasNumber = false;

        function digitos($arg)
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + arg;
            else {
                document . getElementById("screen") . value = arg;
                $this->reset = false;
            }

            $this->wasNumber = true;
        }

        function punto()
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + ".";
            else {
                document . getElementById("screen") . value = ".";
                $this->reset = false;
            }

            $this->wasNumber = false;
        }

        function suma()
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + "+";
            else {
                document . getElementById("screen") . value = "+";
                $this->reset = false;
            }

            $this->wasNumber = false;
        }

        function resta()
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + "-";
            else {
                document . getElementById("screen") . value = "-";
                $this->reset = false;
            }

            $this->wasNumber = false;
        }

        function multiplicacion()
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + "*";
            else {
                document . getElementById("screen") . value = "*";
                $this->reset = false;
            }

            $this->wasNumber = false;
        }

        function division()
        {
            if (!$this->reset)
                document . getElementById("screen") . value = document . getElementById("screen") . value + "/";
            else {
                document . getElementById("screen") . value = "/";
                $this->reset = false;
            }

            $this->wasNumber = false;
        }

        function mrc()
        {
            if (is_nan($this->memoria))
                $this->memoria = 0;

            if ($this->wasNumber)
                document . getElementById("screen") . value = this . memoria . toString();
            else
                document . getElementById("screen") . value = document . getElementById("screen") . value + this . memoria . toString();

            $this->reset = false;
            $this->wasNumber = true;
        }

        function mMenos()
        {
            $x = 0;
            $res = 0;
            $x = document . getElementById("screen") . value;
            try {
                $res = intval(eval($x));
                $this->memoria = $this->memoria - $res;
            } catch (Exception $err) {
                document . getElementById("screen") . value = "Error = " + $err;
            }

            $this->reset = true;
            $this->wasNumber = false;
        }

        function mMas()
        {
            $x = 0;
            $res = 0;
            $x = document . getElementById("screen") . value;
            try {
                $res = intval(eval($x));
                $this->memoria = $this->memoria + $res;
            } catch (Exception $err) {
                document . getElementById("screen") . value = "Error = " + $err;
            }

            $this->reset = true;
            $this->wasNumber = false;
        }

        function borrar()
        {
            document . getElementById("screen") . value = "0";
            $this->reset = true;
            $this->wasNumber = true;
        }

        function igual()
        {
            $x = 0;
            $x = document . getElementById("screen") . value;
            try {
                document . getElementById("screen") . value = eval($x);
            } catch (Exception $err) {
                document . getElementById("screen") . value = "Error = " + $err;
            }

            $this->reset = true;
            $this->wasNumber = true;
        }
    }

    $calculadora = new Calculadora();


    echo "
    <article lang='es'>
        <h2>cabecera inutil</h2>
        <p>
            <label for='screen'>
                Calculadora basica
            </label>
            <input type='text' id='screen' disabled value='0' name='pantalla' />
        </p>

        <div lang='es'>
            <div>
                <div><button onclick='calculadora.mrc()'>mrc</button></div>
                <div><button onclick='calculadora.mMenos()'>m-</button></div>
                <div><button onclick='calculadora.mMas()'>m+</button></div>
                <div><button onclick='calculadora.division()'>/</button></div>
            </div>
            <div>
                <div><button onclick='calculadora.digitos(7)'>7</button></div>
                <div><button onclick='calculadora.digitos(8)'>8</button></div>
                <div><button onclick='calculadora.digitos(9)'>9</button></div>
                <div><button onclick='calculadora.multiplicacion()'>*</button></div>
            </div>
            <div>
                <div><button onclick='calculadora.digitos(4)'>4</button></div>
                <div><button onclick='calculadora.digitos(5)'>5</button></div>
                <div><button onclick='calculadora.digitos(6)'>6</button></div>
                <div><button onclick='calculadora.resta()'>-</button></div>
            </div>
            <div>
                <div><button onclick='calculadora.digitos(1)'>1</button></div>
                <div><button onclick='calculadora.digitos(2)'>2</button></div>
                <div><button onclick='calculadora.digitos(3)'>3</button></div>
                <div><button onclick='calculadora.suma()'>+</button></div>
            </div>
            <div>
                <div><button onclick='calculadora.digitos(0)'>0</button></div>
                <div><button onclick='calculadora.punto()'>.</button></div>
                <div><button onclick='calculadora.borrar()'>C</button></div>
                <div><button onclick='calculadora.igual()'>=</button></div>
            </div>
        </div>
    </article>
    ";
    ?>


</body>

</html>