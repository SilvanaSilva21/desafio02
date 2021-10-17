//data set atributes

    window.onload = function(){

        const btnBuscar = document.querySelector("#btnBuscar");
        const txtNomeCli = document.querySelector("#nomeCliente");

        btnBuscar.addEventListener('click', function(){
            let dataSetCliente = txtNomeCli.dataset.codigo;
            let dataSetStatus = txtNomeCli.dataset.status;
            console.log(dataSetStatus);
            
        })
    }
