var elementoTabela = document.getElementById("tabelaJogadores");

function addJogador(jogador) {
  var jogadorStr = jogador;
  var jogador = {
    nome: `${jogadorStr[0].toUpperCase() + jogadorStr.substring(1)}`,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };

  elementoTabela.innerHTML = `
      <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>   
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria()">Vitória</button></td>
          <td><button onClick="adicionarEmpate()">Empate</button></td>
          <td><button onClick="adicionarDerrota()">Derrota</button></td>
      </tr>
  `;
}

function exibirNaTela(jogador) {
  elementoTabela.innerHTML = `
      <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>   
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(${jogador})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${jogador})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${jogador})">Derrota</button></td>
      </tr>
  `;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela(jogador);
}

function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela(jogador);
}

function adicionarDerrota(jogador) {
  jogador.derrota++;
  jogador.pontos = jogador.pontos - 3;
  exibirNaTela(jogador);
}

addJogador("rafa");

// ainda nao consegui resolver aq, no codepen funciona normalmente 