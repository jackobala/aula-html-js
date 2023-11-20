function validaNumber(){
    //recebe valores dos campos A e B
    var numberA = parseFloat(document.getElementById('NumberA').value);
    var numberB = parseFloat(document.getElementById('NumberB').value);

    //varifica se B é maior que A
    if (numberB > numberA){
        alert("Sucesso");
    } else {
        alert('Erro, o segundo numero deve ser maior!');
    }
}

