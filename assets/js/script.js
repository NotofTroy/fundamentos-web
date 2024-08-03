let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.minWidth = "20%";
nome.style.maxWidth = "50%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido! Digite um nome com 3 ou mais caracteres.";
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "Nome válido!";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido! Ele precisa conter @ e .";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "E-mail válido!";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = "Assunto longo demais, digite até 100 caracteres.";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";

    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {

    if(nomeOk && emailOk && assuntoOk) {
        alert("Formulário enviado!");
    } else {
        alert("Preencha todos os campos corretamente antes de enviar.");
    }
}