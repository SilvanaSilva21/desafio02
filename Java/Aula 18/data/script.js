let meses = ['janeiro','fevereiro','março','abril',
            'maio','junho','julho', 'agosto','setembro',
            'outubro','novembro','dezembro'
];

let diaSemana = [
    'domingo','segunda','terça','quarta',
    'quinta','sexta', 'sábado', 'domingo'
];

let data = new Date();
console.log(`hoje é ${diaSemana[data.getDay()]} de ${meses[data.getMonth()]} de ${data.getFullYear()}`);

let dataFormatada = data.toLocaleString('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'});
console.log(dataFormatada);