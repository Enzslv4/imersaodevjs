var numeroSecreto = parseInt(Math.random() * 1001);
var chute = 0;


alert('Bem vindo ao jogo do "Mentalista"!');

var chances = prompt('Antes de tudo, qual dificuldade vc quer? "f"acil ou "d"ificil: ');

if (chances == 'f') {
    var chances = 10
} else if (chances == 'd') {
    var chances = 5
};

alert('Ok vc tem ' + chances + ' chances restantes.');

while (chute != numeroSecreto && chances > 0){

    var chute = prompt('Digite um valor entre 0 e 1000') // prompt serve para solicitar algo do usuario

    if (chute == numeroSecreto) {
        alert('Acertou Miserávi!')
    } else if (chute < numeroSecreto){
        chances--
        alert('Baixo. Tente novamente. Tentativas restantes: ' + chances)
    } else if (chute > numeroSecreto){
        chances--
        alert('Alto. Tente novamente. Tentativas restantes: ' + chances)
    }
};

if (chances == 0){
    alert('Game Over!', numeroSecreto)
}