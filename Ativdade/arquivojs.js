function Mudar_Cor_Quadrado(squareId, className) {
    var Quadrado = document.getElementById(squareId);
    Quadrado.classList = className;
}

function Mudar_Cor_Primeiro_Quadrado(squareId, className) {
    Mudar_Cor_Quadrado('quadrado1', className);
    Mudar_Cor_Quadrado('quadrado2', className);
    Mudar_Cor_Quadrado('quadrado4', className);
}

function Mudar_Cor_Segundo_Quadrado(squareId, className) {
    Mudar_Cor_Quadrado('quadrado3', className);
    Mudar_Cor_Quadrado('quadrado5', className);
}


function realizarConta() {
    var a = parseFloat(document.getElementById('Input1').value);
    document.getElementById('quadrado4').innerHTML = a;
    var b = parseFloat(document.getElementById('Input2').value);
    document.getElementById('quadrado5').innerHTML = b;
    document.getElementById('quadrado6').innerHTML = '=';
    var total = a + b;
    document.getElementById('quadrado7').innerHTML = total;
}
