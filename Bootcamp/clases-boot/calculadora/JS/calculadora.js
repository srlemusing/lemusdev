

var sumar = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    var numA = parseInt(num1)
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