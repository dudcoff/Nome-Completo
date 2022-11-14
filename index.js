let nome = prompt("Digite seu primeiro nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

let nomeCompleto = nome + sobrenome;
alert(`Seu nome completo é: ${nome + " " + sobrenome} \n 
Seu nome de catálogo é: ${sobrenome.toUpperCase()}, ${nome}`);