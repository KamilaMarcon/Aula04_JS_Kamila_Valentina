//testando loop com while
var x = 0;
document.write('<br><h3>testando loop com while</h3>');
while (x <= 5) {
    document.write('<br>o valor de x é :' + x);
    x = x + 1;
}

//laço for =para 
var controle = 10;
document.write('<br><h3>testando loop com for</h3>');
for (a = 0; a < controle; a++) {
    document.write('<br>o valor de x é:' + a);
    //x=x+1;
}

//laço switch =escolha
// criar a função pedir()
function pedir() {
    // alert("A casa caiu mano!!!");
    var valor = prompt("Digite a opção de 1 a 4");
    // console.log(valor);
    //  console.log (typeof(valor));
    // console.log(Number(valor));
    // console.log (typeof(Number(valor)));

    switch (Number(valor)) {

        case 1:
            alert("você escolheu suco");
            break;

        case 2:
            alert("você escolheu Água gelada");
            break;

        case 3:
            alert("você escolheu sorvete");
            break;

        case 4:
            alert("você chamou o garçom");
            break;

        default:
            alert("Digite de 1 a 4");
            break;
    }
}