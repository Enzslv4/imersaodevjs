var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/5/5b/Oppenheimer_poster.jpg', 'https://media.fstatic.com/YTz-kfNphh-TH6vn_jT3eTM_Q3U=/322x478/smart/filters:format(webp)/media/movies/covers/2014/09/interestelar_t27814_15.jpg',
    'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/8592/filme_8592.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/A_Origem_Trilha.jpg/220px-A_Origem_Trilha.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OvYBI2dc3UMzslgwcsxAc3g51GgODK-FRw&usqp=CAU'
]


for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>')
}
