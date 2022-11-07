function abrirCaixaNivel(elemento){
    elemento.classList.toggle("escondido");
    let elementopai = elemento.parentNode;
    let aux = elementopai.querySelector(".area-inputs-nivel");
    aux.classList.remove("escondido");
    elementopai.classList.remove("caixa-nivel-fechada");
    elementopai.classList.add("caixa-nivel-aberta");
}

function finalizarQuiz(){
    let pai = document.querySelectorAll(".area-inputs-nivel");
    let minPercent = -1;
    let erro = 0;
    for(let i = 0; i < pai.length ;i++){
        let  a = pai[i];
        let filhos = a.children;
        console.log(filhos)
        let titulo1 = filhos[0];
        let percent1 = filhos[1];
        let imagem1 = filhos[2];
        let desc1 = filhos[3];
        
        console.log(percent1.value)
        console.log(minPercent)
        if(percent1.value == 0){
            minPercent = 1;
        }
        console.log(minPercent)
        try {
            let url = new URL(imagem1.value)
            erro = 1;
        } catch(err) {
            erro = -1
        }
        if(titulo1.value.length<10 || (percent1<0 || percent1>100) || desc1.value.length < 30){
            erro = -1;
        }
        if(erro === -1){
            alert('Preencha os dados corretamente');
            return;
        }
    }
    if(minPercent !== 1){
        alert('Pelo menos um nível tem que ter minimo de acerto igual a 0%');
        return;
    }
    else if(erro === 1){
        alert('deu bom')
        return; // IMPLEMENTAR O PUSH DOS QUIZES AQUI
    }
       
}