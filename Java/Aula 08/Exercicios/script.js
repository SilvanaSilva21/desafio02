//template strings, variavel sem sinal de +

// let str = `Qualquer conteudo`;

// let str2 = `Uma outra string ${str}`;

// console.log (str2);

//Arrays, uma coleção de dados; é constituido por elementos;
//começa sempre da posição 0;

// const frutas = ["uva","Banana","Laranja","Melancia"];
// let euGosto = `eu gosto de ${frutas[2]}`;

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

const Pessoa = [
    "José",//0
    23,//1
    "Solteiro",
    "Bola",
    1.70,
    cores=["azul","preto","vermelho","salmão","ocre"]
];

let key = 5;

key++;

console.log(Pessoa.length);//tamanho do array
console.log(Pessoa[5][key]);

// const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]} 
// eu também gosto de jogar ${Pessoa[3]}. Minha altura é ${Pessoa[4]}`;

// (function(Pessoa){
//     const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]} 
// eu também gosto de jogar ${Pessoa[3]}. Minha altura é ${Pessoa[4]}`;
// document.write(jose);
// })(Pessoa);

//Array dentro do Array: bi dimensional

