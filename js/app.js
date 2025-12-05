let btnJanelaSobre = document.getElementById("sobre-mim-janela"),
    btnJanelaProjetos = document.getElementById("projetos-janela"),
    btnFecharSobre = document.getElementById("icon-fechar-sobre"),
    btnFecharProjetos = document.getElementById("icon-fechar-projetos"),
    janelaSobreAberta = false,
    janelaProjetosAberta = false

btnJanelaSobre.addEventListener("click", function(){
    if(janelaSobreAberta == false){
        document.getElementById("col-sobre-mim").classList="col-12 order-1 mb-3"
        document.getElementById("col-projetos").classList.remove("order-1")
        document.getElementById("col-projetos").classList.remove("order-2")
        document.getElementById("col-projetos").classList.add("order-2")
        janelaSobreAberta = true
    }
    else if(janelaSobreAberta == true){
        if(document.getElementById("col-sobre-mim").classList.contains("order-1")){
            document.getElementById("col-sobre-mim").classList="col-lg-6 col-md-12 mb-3"
            document.getElementById("col-projetos").classList.remove("order-1")
            document.getElementById("col-projetos").classList.remove("order-2")
            janelaSobreAberta = false
        }
        else{
            document.getElementById("col-projetos").classList.remove("order-1")
            document.getElementById("col-projetos").classList.add("order-2")
            document.getElementById("col-sobre-mim").classList.remove("order-2")
            document.getElementById("col-sobre-mim").classList.add("order-1")
        }
    }
})

btnJanelaProjetos.addEventListener("click", function(){
    if(janelaProjetosAberta == false){
        document.getElementById("col-projetos").classList="col-12 order-1 mb-3"
        document.getElementById("col-sobre-mim").classList.remove("order-1")
        document.getElementById("col-sobre-mim").classList.remove("order-2")
        document.getElementById("col-sobre-mim").classList.add("order-2")
        janelaProjetosAberta = true
    }
    else if(janelaProjetosAberta == true){
        if(document.getElementById("col-projetos").classList.contains("order-1")){
            document.getElementById("col-projetos").classList="col-lg-6 col-md-12 mb-3"
            document.getElementById("col-sobre-mim").classList.remove("order-1")
            document.getElementById("col-sobre-mim").classList.remove("order-2")
            janelaProjetosAberta = false
        }
        else{
            document.getElementById("col-sobre-mim").classList.remove("order-1")
            document.getElementById("col-sobre-mim").classList.add("order-2")
            document.getElementById("col-projetos").classList.remove("order-2")
            document.getElementById("col-projetos").classList.add("order-1")
        }
    }
})

btnFecharSobre.addEventListener("click", function(){
    document.getElementById("col-sobre-mim").classList="col-lg-6 col-md-12 mb-3"
    document.getElementById("col-projetos").classList="col-lg-6 col-md-12 mb-3"
    janelaSobreAberta = false
    janelaProjetosAberta = false
})

btnFecharProjetos.addEventListener("click", function(){
    document.getElementById("col-sobre-mim").classList="col-lg-6 col-md-12 mb-3"
    document.getElementById("col-projetos").classList="col-lg-6 col-md-12 mb-3"
    janelaSobreAberta = false
    janelaProjetosAberta = false
})