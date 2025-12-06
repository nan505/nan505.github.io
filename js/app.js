let loadingNumero = Math.floor(Math.random() * 3) + 1,
    resultadoImg = document.getElementById("img-carregamento"),
    resultadoTexto = document.getElementById("texto-carregamento")

if(loadingNumero == 1){
    resultadoImg.src="./imgs/Ice_Cream.webp"
    resultadoImg.alt="Sea-salt ice cream"
    resultadoTexto.innerHTML=`"You remember what this ice cream is called?"`
}
else if(loadingNumero == 2){
    resultadoImg.src="./imgs/Axel_Chess_Piece.webp"
    resultadoImg.alt="Axel's Chess Piece"
    resultadoTexto.innerHTML=`"If you have a dream, don't wait. Act."`
}
else{
    resultadoImg.src="./imgs/Roxas_Chess_Piece.webp"
    resultadoImg.alt="Roxas's Chess Piece"
    resultadoTexto.innerHTML=`"And who am I... supposed to be?"`
}
    

window.addEventListener("load", function(){
    this.document.getElementById("carregamento-wrap").classList.add("carregamento-invisivel")

    this.document.getElementById("carregamento-wrap").addEventListener("transitionend", function(){
        document.body.classList.remove("body-sem-scroll")
        document.getElementById("carregamento-wrap").classList.add("fundo-da-pagina")
    })
})

window.onbeforeunload = function (){
  window.scrollTo(0, 0);
}

history.scrollRestoration = "manual"

let btnJanelaSobre = document.getElementById("sobre-mim-janela"),
    btnJanelaProjetos = document.getElementById("projetos-janela"),
    btnJanelaConhecimentos = document.getElementById("icons-janela"),

    btnFecharSobre = document.getElementById("icon-fechar-sobre"),
    btnFecharProjetos = document.getElementById("icon-fechar-projetos"),
    btnFecharConhecimentos = document.getElementById("icon-fechar-conhecimentos"),

    janelaSobreAberta = false,
    janelaProjetosAberta = false,
    janelaConhecimentosAberta = false

btnJanelaSobre.addEventListener("click", function(){
    if(janelaSobreAberta == false){
        document.getElementById("texto-sobre-mim").classList.remove("texto-janela")
        janelaSobreAberta = true
    }
    else{
        document.getElementById("texto-sobre-mim").classList.add("texto-janela")
        janelaSobreAberta = false
    }
})

btnFecharSobre.addEventListener("click", function(){
    document.getElementById("texto-sobre-mim").classList.add("texto-janela")
    janelaSobreAberta = false
})

btnJanelaConhecimentos.addEventListener("click", function(){
    if(janelaConhecimentosAberta == false){
        document.getElementById("col-tecnologias").classList="col-12 mb-3"
        janelaConhecimentosAberta = true
    }
    else{
        document.getElementById("col-tecnologias").classList="col-lg-6 col-md-12 mb-3"
        janelaConhecimentosAberta = false
    }
    if(document.getElementById("container-conhecimentos").classList.contains("icons-overflow") && janelaConhecimentosAberta == true){
        document.getElementById("container-conhecimentos").classList.remove("icons-overflow")
    }
    else{
        document.getElementById("container-conhecimentos").classList.add("icons-overflow")
    }
})

btnFecharConhecimentos.addEventListener("click", function(){
    document.getElementById("col-tecnologias").classList="col-lg-6 col-md-12 mb-3"
    document.getElementById("container-conhecimentos").classList.add("icons-overflow")
    janelaConhecimentosAberta = false
})