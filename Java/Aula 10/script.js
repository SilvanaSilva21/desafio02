// match() procura palavras em uma string,
// i busca sem case-sensitive (diferencia maiuscula de minusculas)
// g encontra todas as ocorrencias da palavra e não para na primeira
//encontrada, cada ocorrencia é armazenada emuma posição do array
// m perquisa normal, sem armazenar na forma fo array

// let nome = "Marcelo da Silva";

// console.log(  nome.match('m')  );

// let nome = "Marcelo da Silva";

// console.log(   nome.search('M')    );
// console.log(nome[0]);

//replace - substitui uma string por outra, ele pesquisa;

// let str = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellendus nisi velit sapiente mollitia, assumenda sunt alias delectus voluptas animi accusamus asperiores facere. Repellendus quidem temporibus dolores adipisci, voluptatem asperiores. `;

// let strOutra = str.replace(/i/gi,'y');

// console.log(strOutra);

//O metodo localeCompare() efetua comparação entre strings

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(outroGato)); exercicio produto repetido

// let gato = "gato";
// let outroGato = "gato";

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

// console.log(cat1.localeCompare(cat2));


//toString() irá converter um calor qualquer em um string

// let num = Number('1');

// console.log(num.toString());

//toLowerCase() converte uma string para minusculos

// let str = ` Lorem ipsum DFYolor sit amet consectetur`;

// console.log(str.toLowerCase());

//toUpperCase() converte uma string para maiusculos

// let str = ` Lorem ipsum DFYolor sit amet consectetur`;

// console.log(str.toUpperCase());

//trim() remove espaços antes e depois da string especificada

// let str1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

// console.log(str1.trim());

// let str2 = "    Lorem ipsum dolor sit amet consectetur adipisicing elit.    ";

// console.log(str2);

//NaN quando um string for passada para NUmber(), parseInt ou parseFloat e 
//não consiga efetuar a conversão será retornando NaN (Not as Number)

// let num = Number('ai');
// console.log(isNaN (1));

// if()

//toFixed() analisa um valor e retorna uma string conforme o parametro de casas

// let valor = 2.45;

// console.log(valor.toFixed(1));

//o metodo toLocaleString() ira retorna uma string com uma representação
//da moeda definida como parametro

// toLocaleString ('pt-BR' {style: 'currency', currency: 'BRL'});

// console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'} ))



