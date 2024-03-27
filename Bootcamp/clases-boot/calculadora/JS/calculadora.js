//En este archivo estamos definiendo las funcionalidades especificas
//Para llevar a cabo la captura de datos
//Definimos una funcion por cada operacion: sumar, restar, multiplicar y dividir

var sumar = function() { 
    var num1 = document.getElementById("numero1").value //Indicamos que a la variable num1 le pase lo insertado en el id numero1 del HTML y lo conserve para la operacion siendo este el primer numero
    var num2 = document.getElementById("numero2").value //Indicamos que a la variable num2 le pase lo insertado en el id numero2 del HTML y lo conserve para la operacion siendo este el segundo numero
    var numA = parseInt(num1) //Indicamos parseInt para convertir de texto a numero los datos insertados por el usuario y conservado en la variable num1 y que lo reescriba en la nueva variable numA
    var numB = parseInt(num2)
    alert(numA+numB)
}

var restar = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1-num2)
}

var multiplicar = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1*num2)
}

var dividir = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1/num2)
}