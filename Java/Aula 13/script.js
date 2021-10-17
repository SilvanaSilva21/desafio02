// for in: valores de objetos. trabalha com objetos
// let i=0;
// for(let x=0; x < 10; x++){
//     console.log (`o valor da interação é ${x} o x mais ele mesmo ${i++}`);
// }

// let Pessoas = {
//     nome: "Steven Roger", 
//     idade: 90,
//     heroi:"capitão america",
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
// }

//arr = ["nome => "Marcelo] - array associativo
// arr[nome]

//for of: percorre uma propriedade de um array de forma direta.
//lista array

// let frutas = ["melancia","manga", "uva", "banana"];

// for(let nomeFruta of frutas){
//      console.log(nomeFruta);
// }

// for(let x=0; x < frutas.length; x++){
//     console.log(`O nome da fruta é ${frutas[x]}`);
// }

// let herois = [
//     {
//         identidadeSecreta: "Steven Roger",
//         heroi: "capitão américa",
//     },
//     {
//         identidadeSecreta: "Tony Stark",
//         heroi: "homem de ferro",
//     }
// ];

// herois.push({identidadeSecreta:"Diana", heroi: "Mulher Maravilha"});

// // let marvel = herois[1].identidadeSecreta;
// // console.log(marvel)

// for(let marvel of herois){ //for of
//     // console.log(marvel);
//     for(let m in marvel){  // for in
//         console.log(`${m} -> ${marvel[m]}`);
//     }
// }

let palavra = "hulk";



function invertePalavra(p="marcelo", re){
    for(let i=(p.length-1); i >=0; i--){
        console.log(p[i]);

} 
}

invertePalavra('Maria');