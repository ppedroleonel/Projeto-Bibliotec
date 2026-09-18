const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//* Configuração da paginação

// Define quantos livros serão mostrados em cada pagina 
const livrosPorPagina = 4;

// guarda qual pagina esta sendo exibida, começando na pagina 1
let paginaAtual = 1

//* Calculando o total de paginas

// divide a quantidade de livros pela quantidade de livros por pagina
// o .ceil arrendonda o resultado para cima
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

// * função responsavel por mostrar a pagina (atualizar os elementos)
function mostrarPagina() 
{
    // descobre o indice do primeiro livro que deve aparecer

    // pega qual a posicao inicial e ve ate qual numero do array ele pode percorrer pra pegar 4 livros no nosso caso ele vai parar na posicao 3 ai dps ele vai refazer a conta e ver qual vai ser a nova posicao inicial
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    const fim = inicio + livrosPorPagina

    // percorre toda lista de livros encontrados no HTML
    // "livro" representa o elemento atual
    // "posicao" reprensa a posicao desse livro na lista
    livros.forEach((livro, posicao) => {

        // inicio na pagina 1 = posicao 0
        // fim da pagina 1 = posicao 4

        // verifica se o indice/posicao do livro esta dentro do intervalo da pagina atual.
        if(posicao >= inicio && posicao < fim)
        {
            // se tiver dentro do intervalo, mostra o livro
            livro.style.display = "grid";
        }
        else
        {
            // se nao tiver, esconde o livro
            livro.style.display = "none";
        }
    })

    // Atualiza no HTML o numero da pagina atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos "fim" como a posicao do ultimo livro mostrado

    let ultimoLivro = fim;

    // se o ultimoLivro for maior q o tamanho total dos array dos livros, ele vai receber o tamanho do array
    if(ultimoLivro > livros.length)
    {
        ultimoLivro = livros.length;
    }
    
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`
}

// evento de click no botao de proxima pagina

botaoProxima.addEventListener("click", () => {
    // so permite avançar paginas se ainda exisitir uma pagina pra avançar
    if(paginaAtual < totalPaginas) 
    {
        paginaAtual++;
        mostrarPagina(); // chama a função para atualizar as informações da nova pagina 
    }
})

// evento de click no botao de pagina anterior

botaoAnterior.addEventListener("click", () => {
    
    //so permite voltar se não estivermos na primeiira pagina
    if(paginaAtual > 1)
    {
        //  voltamos uma pagina
        paginaAtual--;

        //aatualiza os livros exibidos na tela
        mostrarPagina();
    }
})

// quando a pagina carregar, precisamos executar a função de mostrar pagina uma vez para esconder os livros que nao pertencem a  primeira pagina
mostrarPagina();