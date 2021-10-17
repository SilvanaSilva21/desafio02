// while

// let loop=0;
// let cores=["verde", "vermelho"]

// while(loop < cores.length){
//     console.log(cores [loop]);
//     loop++;
// }
    
// let teste=0

// do{
//     teste = Number(prompt("Digite 0 sair"));

//     switch(teste){
//         case 0:
//             alert("saindo do sistema");
//             break;
//         case 1:
//             alert("cadastrando");
//             break;
//         case 2:
//             alert("Consultando");
//             break;
//         default:
//             alert("Opção Inválida");
//             break;
//     }

    
// }while(teste!=0)

let frutas = [
    {fruta: "maçã", preco: 6.34},
    {fruta: "melancia", preco: 3.50},
]



function listaFrutas(f){
for(let produto of frutas){
    for(let p in produto){
        console.log(`${p} -> ${produto[p]}`)
    }
}
}

listaFrutas(frutas);