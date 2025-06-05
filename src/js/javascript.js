const perguntasErespostas = document.querySelectorAll(".duvida");

perguntasErespostas.forEach(function (duvida) {
    duvida.addEventListener("click", function () {

        /* O togle servirá para adicionar e remover a classe "ativo", quando o elemento estiver essa classe ele irá remove-la e assim vice e versa */
 
        duvida.classList.toggle('ativo')
        
    });
});

