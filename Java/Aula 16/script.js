//querySelector: unico elemento de um grupo
//querySelectorAll: todos os elementos de um grupo

//forEach()especie de loop que ira percorrer  Nodelist retornado pelo
//querySelectorAll;

// window.onload = function(){ //click em lista pai/filho

//     const ulPai = document.querySelectorAll("#ulPai");
//     // console.log(ulPai);

//     ulPai.forEach(function(lista){

//         lista.addEventListener('click',function(elemento){
//             alert(elemento.target.innerHTML);
//         })

//     })
// }

// function tabuada(numero){

//     let tabuada=0;
//     if(typeof numero !=='number'){
//         alert("digite um valor numerico valido");
//     } else {
//         if(numero < 1 || numero > 10 ){
//             alert("digite um valor entre 1 e 10")
//         }else {
//             console.log(`tabuada do ${numero}`);
//             while(tabuada <=10){
            
//             console.log(`${numero} x ${tabuada} =  ${(numero*tabuada)}`);
//             tabuada++;
//         }
//     }

//     // while(tabuada <=10){
//     //     console.log(numero * tabuada);
//     //     tabuada++;
//     } 
// }
// tabuada(9);
// }

window.onload = function(){

    const tab = document.querySelector("#tabuada");
    const btn = document.querySelector ("#calcular");
    const resp = document.querySelector("#resposta");
   
    btn.addEventListener('click',function(){
        

            let numero = Number(tab.value);
            let tabuada=0;
            

            if( isNaN(numero)){
                resp.innerHTML = "digite um valor numerico valido";
            } else {
                if(numero < 1 || numero > 10 ){
                    resp.innerHTML="digite um valor entre 1 e 10";
                }else {
                    console.log(`tabuada do ${numero}`);
                    while(tabuada <=10){
                    
                    resp.innerHTML +=`<br> ${numero} x ${tabuada} =  ${(numero * tabuada)}`;
                    tabuada++;
                }
            }
                       
            }
        })
        
}