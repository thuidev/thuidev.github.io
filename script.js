// Seleciona o elemento h1 da página
const meuTitulo = document.querySelector('h1');

// Adiciona um "ouvinte de evento" que espera por um clique
meuTitulo.addEventListener('click', () => {
    alert('Olá amigo, é um prazer te ver por aqui visitando meu site!!');
});