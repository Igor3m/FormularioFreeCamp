function meusDados(){
    const form = document.querySelector('survey-form');
    const resultado = document.querySelector('resultado');

    form.onsubmit = function (evento) {
        evento.preventDefault();
        const nome = evento.target.querySelector('name');
        const email = evento.target.querySelector('email');
        const age = evento.target.querySelector('age');
        const ocupacao = evento.target.querySelector('namdropdown');

        console.log(nome.value);

     


        resultado.innerHTML += `<p>${nome.value} </p>`;
        
    };
}
meusDados();