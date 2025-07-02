const jogos = [
  {
    nome: "The Legend of Zelda",
    imagem: "https://upload.wikimedia.org/wikipedia/en/6/6d/Legend_of_Zelda_Breath_of_the_Wild.jpg",
    descricao: "Aventura épica em mundo aberto."
  },
  {
    nome: "God of War",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    descricao: "Ação intensa com Kratos e seu filho."
  },
  {
    nome: "Minecraft",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    descricao: "Construa tudo com blocos em um mundo infinito."
  }
];

const catalogo = document.getElementById('catalogo');

jogos.forEach(jogo => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${jogo.imagem}" alt="${jogo.nome}" />
    <div class="card-content">
      <h3 class="card-title">${jogo.nome}</h3>
      <p class="card-desc">${jogo.descricao}</p>
    </div>
  `;

  catalogo.appendChild(card);
});