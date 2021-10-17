//document.getEmentById(id_do_elemento) faz a captura pela referencia do id html do el
//document.querySelector(Id ou classe do elemento) faz captura pela ref. do id ou classe do el
//document.querySelectAll(referencia_do_elemento_pai) faz a captura do elemento pai para manipular os elementos filhos

//DOM para disparar um evento é necessário identificar o elemento que será alvo da ação

// tarefa + evento + função

//typeof = verifica o conteudo, se é um numero, ou string

// console.log(typeof m)

// let m = false;



// if(typeof m === "number"){
//     console.log(`o dado informado é um numero ${m} : `)
// } else {
//     console.log(`o dado informado não é um numero ${m} : ${typeof m} `)
// }

// window.onload = function(){
//     const botao = document.getElementById('botaoenviar');
//     const txtBox = document.querySelector("#txtBox");
//     const caixa = document.querySelector("#caixa");

//     botao.addEventListener('click',function(){
//         caixa.innerHTML += ' ' +txtBox.value+ ' '; 
//     })
// }

//exercicio

window.onload = function(){

function tabuada(numero){

    let tabuada=0;
    if(typeof numero !=='number'){
        alert("digite um valor numerico valido");
    } else {
        if(numero < 1 || numero > 10 ){
            alert("digite um valor entre 1 e 10")
        }else {
            console.log(`tabuada do ${numero}`);
            while(tabuada <=10){
            
            console.log(`${numero} x ${tabuada} =  ${(numero*tabuada)}`);
            tabuada++;
        }
    }

        
    } 
}
tabuada(9);
}