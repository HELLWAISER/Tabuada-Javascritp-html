/*
Exemplo de uma tabuada
*/ 

// Declaração de uma função


// obtendo do DOm o tbody da tabela
function calculaTabuada() {
  let tabuada = document.querySelector("#tabuada tbody");
// obtendo o valorA do campo imput e convertendo em inteiro  
  let valorA = parseInt(document.querySelector("#valorA").value); 
// limpando o conteúdo do tbody
  tabuada.innerHTML = '';

// criando um laço de repetição de 0 a 10  
  for (let valorB = 0; valorB <= 10; valorB++) {

    // calculo de resultado
    let resultado = valorA * valorB;
// criando template das colunas da  linha atual
    let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
            `;
    // criando o elemento TR        
    let tr = document.createElement("tr");
    // inserindo as colunas na linha
    tr.innerHTML = template;
    // inserindo a linha na tabela
    tabuada.append(tr);
  } // fechando o for
 
} // fechando a função


// chamando a nossa função pela primeira vez
calculaTabuada();


// adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);



// NOTA
// append significa adicionar no final
// function escreve(quem, oQue) {console.log(`${quem} é o rei do ${oQue}`);}