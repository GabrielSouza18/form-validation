const form = document.querySelector("#form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const inputTrabalho = document.querySelector("#trabalho");
const inputMensagem = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Verifica se o nome esta vazio
  if (inputNome.value === "") {
    //Modal com sweetAlert
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Verifique o Campo Nome",
      footer: '<a href="">Digite seu nome corretamente</a>',
    });
    // Return para ele nao continuar a funcão
    return;
  }
  
  //Verifica se o email está preenchido e se é valido

  if (inputEmail.value === "" || !emailValido(inputEmail.value)) {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Verifique o Campo Email",
      footer: '<a href="">Digite seu Email corretamente</a>',
    });
    return;
  }

  //Verifica se a senha está Preenchida

  if (!validacaoSenha(inputSenha.value, 8)) {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Verifique o Campo Senha",
      footer: '<a href="">Digite sua senha corretamente</a>',
    });
    return;
  }
  //Verifica se a situação foi selecionada
  if (inputTrabalho.value === "") {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Verifique o Campo Situação",
      footer: '<a href="">Escolha uma opção</a>',
    });
    return;
  }
  //Verifica se a mensagem esta preenchida

  if (inputMensagem.value === "") {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Verifique o Campo Mensagem",
      footer: '<a href="">Digite uma Mensagem</a>',
    });
    return;
  }
  //Se todos os campos estiverem Corretamente preenchidos, envie o form
  
  form.submit(Swal.fire(
    //texto
    'Parabens',
    'Formulario Enviado com Sucesso',
    'success' //Animaçao sucesso
  ));
});

//Funcao que valida o email

function emailValido(email) {
  //cria um regex para validar email
  const emailRegex = new RegExp(
    //Exemplo
    //Usuario12@host.com.br
    //Regex que valida email
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

//funcao que valida a senha

function validacaoSenha(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
    //Senha Valida
  }
  return false;
  //Senha invalida
}



