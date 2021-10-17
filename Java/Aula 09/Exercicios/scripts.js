//Metodos de Arrays

//concat() concatena, junta 2 ou mais arrays;

// let nomes= ["Marcelo","Silvana","Sofia","Adriano"];
// let nomes2=["Maria", "Rafael","Paulo","Pedro"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);
// let qtdArrayNome = `O Array nomes possui ${todosOsNomes.length} elementos`;

// console.log(qtdArrayNome);

//indexOf() procura elemento especifico no array e retorna a sua posição

// let nomes2=["Maria", "Rafael","Paulo","Pedro"];

// let buscaNome = "Paulo";

// if(nomes2.indexOf(buscaNome) != (-1)){
//     alert (`Eu encontrei o nome ${buscaNome} e esta na posição ${nomes2.indexOf(buscaNome)}`);
// } else {
//     alert (`Não encontrei o ${buscaNome}`);
// }

//join() junta todos os elementos da array em uma string

// let nomes2=["Maria", "Rafael","Paulo","Pedro"];

// console.log(nomes2);
// console.log(nomes2.join());

//push() insere um novo elemento no final da array

// let frutas = ["uva","pera","jaca","laranja"];
// // frutas.push ("Maçã","Laranja");
// // frutas.push ("Laranja");
// // console.log (frutas.indexOf("jaca") );

// let insertFrutas = "Morango";

// if(frutas.indexOf(insertFrutas) == -1){
//     console.log (`A fruta ${insertFrutas} não está na lista`);
//     frutas.push(insertFrutas);
// } else {
//     console.log(`A fruta ${insertFrutas} já está na lista`)
   
// };

// console.log(frutas);

//pop() remove o ultimo elemento do array

// let frutas = ["uva","pera","jaca","laranja"];

// frutas.pop();

// console.log(frutas);

//reverse()inverte a ordem dos elementos do array

// let frutas = ["uva","pera","jaca","laranja"];

// frutas.reverse();

// console.log(frutas);

// console.log(frutas[0]);

//shift()remove o primeiro elemento da array

// let frutas = ["uva","pera","jaca","laranja"]

// frutas.shift();

// console.log (frutas)


//sort()ordem crescente

// let alfabeto = ["a", "n", "s", "r", "u", "o"];
// alfabeto.sort ();
// console.log(alfabeto);

//toString()converte um array em string e retorna essa string

// let frutas = ["uva","pera","jaca","laranja"]

// console.log (frutas.toString());

//unshift() insere um novo elemento no inicio do array


//splice() corta o array em um ponto indicado

// let frutas = ["uva","pera","jaca","laranja"];
// let frutasNovas = frutas.slice(0,3); //0 indice 3 quantidade de elementos

// console.log(frutasNovas);


function valorImc(nome, altura, peso){
    
    altura = Number(altura);
    peso = Number(peso);

    let imc = peso / (altura*2);

    console.log("Nome:", nome);
    console.log("Altura:", altura);
    console.log("Peso", peso);
    console.log("IMC", imc);

}

    pesoPessoa = prompt("Digite seu peso");
    alturaPessoa = prompt ("Digite sua altura");
    nomePessoa = prompt ("Digite seu nome");

    valorImc(nomePessoa, alturaPessoa, pesoPessoa);
