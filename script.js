window.addEventListener('load', iniciar);
function iniciar() {
    document.getElementById('btn').addEventListener('click', function() {
        var produto = prompt('Que produto você está comprando?');
        var valor = prompt(`Quanto custa o ${produto}?`);
        var total = prompt(`Quanto você deu pra pagar o ${produto}`);
        var troco = total - valor;
        alert(`Você comprou um ${produto} por R$ ${valor},00, deu R$ ${total},00 em dinheiro e vai receber R$ ${troco},00 de troco`);
    })
}