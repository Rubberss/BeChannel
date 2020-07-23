function limpa_formulario_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        limpa_formulario_cep();
        alert("CEP não encontrado. Informe um CEP válido!");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {
            document.getElementById('rua').value="Carregando...";
            document.getElementById('bairro').value="Carregando...";
            document.getElementById('cidade').value="Carregando...";
            document.getElementById('uf').value="Carregando...";
            
            var url = document.createElement('script');

            //Sincroniza com o callback.
            url.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(url);

        }
        else {
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else{
        limpa_formulario_cep();
        alert("Informe um Cep válido.");
    }
}

function cadastro(){
    alert('Cadastro realizado com sucesso')
}