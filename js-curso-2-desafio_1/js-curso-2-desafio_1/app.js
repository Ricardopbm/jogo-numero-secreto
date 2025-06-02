let titulo = document.querySelector("h1");
titulo.innerHTML = 'Hora do desafio';

function verificarClickDoConsole() {
    console.log("O botão foi clicado");
}

function verificarClickDoAlert() {
    alert("Eu amo JS");
}

function verificarClickDoPrompt() {
    let cidade = prompt("Digite uma cidade do Brasil");
    alert("Estive em " + cidade + " e lembrei de você");
}

function verificarClickEmSoma() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    let soma = numero1 + numero2;
    alert("A soma é: " + soma);
}
