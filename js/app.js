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
    document.getElementById("col-sobre-mim").classList.add("texto-janela")
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
    janelaConhecimentosAberta = false
})