//exercicio 08

// function maiorNumero (num1, num2){

//     if (num1 > num2){
//         console.log ("Número "+num1+ " é maior que o número " + num2);
//     } else {
//         console.log ("Número "+num1+ " é menor que o numero " + num2);
//     }
    
// }

// maiorNumero(5,3);

//Arrow functions

// function teste(){ //para retornar valor na function usar a palavra return;
//     let nome = "Marcelo";
//     return nome;
// }
// // console.log (teste() );

// // let mgs = ()=>{
// //     alert("Estou feliz da vida");
// // }
// // mgs();

// let msg = (nome)=> {return nome;};
// console.log (msg ("Jose") );

//functions auto-executáveis

// (function(produto, preco){
//     alert ("o produto é " + produto + " e o preço é de R$" +preco);
// })("Biscoito", 2.35);

let valor1 = prompt("Digite o valor 1");
let valor2 = prompt ("Digite o valor 2");
const soma = (valor1, valor2)=> {
    let resultado = Number(valor1) + Number (valor2);
    console.log(resultado);
}
soma(valor1+valor2);