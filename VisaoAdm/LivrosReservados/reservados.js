const checkboxes = document.querySelectorAll('input[type="checkbox"]');  // pegou uma lista de checkbox
const statusRetirada = document.querySelectorAll(".status");

checkboxes.forEach((caixinha, indice, lista) => {
    //corpo da funcao
    // console.log("caixinha: ", caixinha);
    // console.log("indice: ", indice);
    // console.log("lista: ", lista);
    
    caixinha.addEventListener("change", () => {

        if(caixinha.checked == true)
        {
            statusRetirada[indice].classList.remove("aguardando");  // tira a class aguardando la do <p> do status da reserva
            statusRetirada[indice].classList.add("retirado");       // adiciona a class retirado la do <p> do status da reserva
            statusRetirada[indice].textContent = "Retirado";        // troca o conteudo q ta escrito no html.  // vai trocar de "Aguardando retirada" para "Retirado" 
            
        }
        else
        {
            statusRetirada[indice].classList.remove("retirado");
            statusRetirada[indice].classList.add("aguardando");
            statusRetirada[indice].textContent = "Aguardando Retirada";
        }
    })
})