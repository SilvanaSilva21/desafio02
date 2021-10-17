window.onload = function(){

    let produtos = [
        {descricao:'Banana', preco:2.50},
        {descricao: 'Melancia', preco: 3.00},
        {descricao:'Laranja', preco:1.99},
        {descricao:'Morango', preco:2.99},
        {descricao:'Uva', preco: 3.99}
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    const total = document.querySelector("#total");

    ( ()=>{
        let totalzinho=0;
        for(let pro of produtos){
            const filhoLi = document.createElement('li');

            for(listaP in pro ){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    totalzinho += pro[listaP];
                } else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
                
                // console.log(pro[listaP])
            }
        }
        total.value=totalzinho.toFixed(2);
    } )(produtos)
    
}