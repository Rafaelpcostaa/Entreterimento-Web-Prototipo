document.getElementById("search").addEventListener("click", function() {
    var box = document.querySelector(".box");
    box.style.display = "block";
  });

document.querySelectorAll(".filmes-series1").forEach(function(filme){
    filme.addEventListener('click', function() {
        var pesquisar1 = document.getElementById("search");
        pesquisar1.value = this.innerHTML;
        var box = document.querySelector('.box');
        box.style.display = 'none';
    })
})

document.querySelectorAll(".filmes-series2").forEach(function(filme){
    filme.addEventListener('click', function() {
        var pesquisar2 = document.getElementById("search");
        pesquisar2.value = this.innerHTML;
        var box = document.querySelector('.box');
        box.style.display = 'none';
    })
})

document.addEventListener("click", function(event) {
    var targetElement = event.target; // Elemento clicado
  
    var box = document.querySelector(".box"); // Tabela
    var searchField = document.getElementById("search"); // Campo de pesquisa
  
    if (targetElement != box && targetElement != searchField) {
      box.style.display = "none"; // Oculta a tabela
    }
  });


