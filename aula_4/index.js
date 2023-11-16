function imagemHtml(link) {
    var linkImagemFilme = '<img src=' + link + '>'
    return linkImagemFilme
}

function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value // serve para adquirir o valor de acordo com o id da var no codigo html
    var elementoListaFilme = document.getElementById('listaFilmes')
    elementoListaFilme.innerHTML = elementoListaFilme.innerHTML + imagemHtml(filmeFavorito)
    document.getElementById('filme').value = ''
}