import { paulo, rafa, gui, renata } from "data.js";
import { numeroPlacar, adicionarVitoria, adicionarEmpate, adicionarDerrota, adicionarPlacar } from "functions.js";



var elementoTabela = document.getElementById('tabelaJogadores');

elementoTabela.innerHTML = `
    <tr>
        <td>${rafa.nome}</td>
        <td>${rafa.vitoria}</td>
        <td>${rafa.empate}</td>
        <td>${rafa.derrota}</td>   
        <td>${rafa.pontos}</td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
    </tr>
`

alert(paulo.vitoria)