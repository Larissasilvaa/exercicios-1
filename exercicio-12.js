function mudaConteudo(opcao) {
    var body = document.getElementById("conteudo");
    var conteudo = "";

    if (opcao == "site1") {
        conteudo = "<h1>Olá mundo</h1>";
        conteudo += "<p>Hello World</p>";
        conteudo += "<img src='https://www.alura.com.br/artigos/assets/hello-world-em-varias-linguagens/imagem1.gif'>"
    } else if (opcao == "site2") {
        conteudo = "<ul>";
        conteudo += "<li>Item 1</li>";
        conteudo += "<li>Item 2</li>";
        conteudo += "<li>Item 3</li>";
        conteudo += "<li>Item 4</li>";
        conteudo += "<li>Item 5</li>";
        conteudo += "</ul>";
        conteudo = "<ol>";
        conteudo += "<li>Item 1</li>";
        conteudo += "<li>Item 2</li>";
        conteudo += "<li>Item 3</li>";
        conteudo += "<li>Item 4</li>";
        conteudo += "<li>Item 5</li>";
        conteudo += "</ol>";
    } else if (opcao == "site3") {
        conteudo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/yorgg2ndlvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        conteudo += '<a href="https://www.youtube.com/watch?v=yorgg2ndlvE" target="_blank">Assistir no Youtube</a>'
    } else {
        conteudo = "<p>Opção inválida.</p>";
    }

    body.innerHTML = conteudo;
}