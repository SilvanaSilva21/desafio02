// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.msg =function(){
//     alert("Olá" + this.nome);
// }

// let NovaPessoa = new Pessoa("Jose");
// let OutraPessoa = new Pessoa("Maria");

// NovaPessoa.msg();
// OutraPessoa.msg();

// let Pessoa2 = {
//     'nome' : '',
//     'idade' : '',

// }
// Pessoa2.__proto__.msg = function(){
//     alert("Olá" + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Marcelo";
// P.msg();
// console.log(P);

// let Pessoa3 = [
//     {
//         'nome' :'Marcelo',
//         'idade':26,
//         'sexo':'M',
//     },
//     {
//         'nome' :'Silvana',
//         'idade':25,
//         'sexo':'F',
//     },
// ]

// let NPessoa = Pessoa3;
// console.log(`Existem ${NPessoa.length} cadastradas`);
// console.log(NPessoa[0].nome);

palavra = 'Dulcineia';

(function(){

        document.write(`esta palavra tem ${palavra.length} caracteres <br>`);
        document.write(`esta palavra ${palavra} ficou ${palavra.toUpperCase()} <br>`);
        document.write(`a letra ${palavra[2]} é o terceiro caracter <br>`);
        document.write(`${palavra} ficou ${palavra.replace(palavra[3], 'X')}`);
})(palavra)
