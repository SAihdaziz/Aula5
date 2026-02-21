const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input-group input");

// VALIDAÇÃO VISUAL
inputs.forEach(input => {
    input.addEventListener("blur", () => {
        const parent = input.parentElement;

        if (input.checkValidity()) {
            parent.classList.remove("error");
            parent.classList.add("success");
        } else {
            parent.classList.remove("success");
            parent.classList.add("error");
        }
    });
});

// ANIMAÇÃO AO ENVIAR
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("sending");

    setTimeout(() => {
        alert("Formulário enviado com sucesso!");
        form.classList.remove("sending");
        form.reset();
        document.querySelectorAll(".input-group")
            .forEach(el => el.classList.remove("success"));
    }, 800);
});

// MÁSCARA CPF
const cpf = document.getElementById("cpf");
if (cpf) {
    cpf.addEventListener("input", () => {
        cpf.value = cpf.value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });
}

// MÁSCARA CARTÃO
const cartao = document.getElementById("cartao");
if (cartao) {
    cartao.addEventListener("input", () => {
        cartao.value = cartao.value
            .replace(/\D/g, "")
            .replace(/(\d{4})(?=\d)/g, "$1 ");
    });
}
