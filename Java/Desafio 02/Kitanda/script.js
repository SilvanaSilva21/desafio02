window.onload = function(){
    
    
    let produtos= [
        {descricao:'Banana', preco:2.30},
        {descricao:'Laranja', preco:2.00},
        {descricao:'Melancia', preco:5.00},
        {descricao:'Uva', preco:4.00},
        {descricao:'Abacaxi', preco:5.00}
    ]
    
    const ullistaprodutos = document.querySelector("#listaProdutos");
    
    (()=>{

        for(let pro of produtos){
            const filhoLi = document.createElement('li');

            for(listaP in pro){
                if( listaP =='preco'){
                    listaProdutos.appenchild(filhoLi).setAttribute('data-preco',pro[listaP]);
                } else {
                    listaProdutos.appenchild(filhoLi).textContent = `${pro[listaP]}`;
                }
                
                
            }

        }


    })()
    
}
