const receitas = [
  {
      titulo: "Torta de Frango",
      imagem: "imgs/torta.jpeg",
      preparo: "Essa receita de torta de frango de liquidificador é deliciosa e muito prática para o dia a dia. Não à toa, é uma das nossa campeãs de acessos. Aprenda agora mesmo a fazer essa torta de frango simpes e fácil!",
      ingredientes: ["2 peitos de frango cozidos e desfiados",
        "1 cebola picada",
        "2 dentes de alho picados",
        "Sal e pimenta a gosto",
        "Massa para torta (pode ser comprada pronta ou caseira)",
        "...."]
  },
  {
      titulo: "Panqueca de Frango",
      imagem: "imgs/panqueca.jpeg",
      preparo: "Misture os ingredientes da massa e faça as panquecas. Refogue o frango desfiado com temperos e recheie as panquecas. Enrole, aqueça no forno e sirva.",
      ingredientes: ["1 xícara de farinha de trigo",
      "1 xícara de leite",
      "1 ovo",
      "1 colher de sopa de óleo vegetal",
      "2 peitos de frango cozidos e desfiados",
      "...."
    ]
  },
  {
      titulo: "Coxinha de Frango",
      imagem: "imgs/coxinha.jpeg",
      preparo: "Preparo da massa com caldo de frango e farinha. Refogue o frango desfiado com temperos e monte as coxinhas. Empane e frite até dourarem, sirva quente.",
      ingredientes: ["2 xícaras de caldo de frango",
      "2 xícaras de farinha de trigo",
      "2 colheres de sopa de manteiga",
      "Sal a gosto",
      "2 peitos de frango cozidos e desfiados", "...."]
  }
  
];

function getListaIngredientes(receita) {
  const listaHTML = `<ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
  return listaHTML;
}

function getCard(receita) {
  return `
  <div class="card" style="width: 300px;">
      <img src="${receita.imagem}" class="card-img-top" alt="Imagem da Receita">
      <div class="card-body">
          <h5 class="card-title">${receita.titulo}</h5>
          <div class="card-text">
              ${getListaIngredientes(receita)}
              <hr>
              <p>${receita.preparo}</p>
          </div>
      </div>
  </div>
  `;
}

function preencheCatalogo() {
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  const catalogoHTML = receitas.map(receita => getCard(receita)).reduce((prev, current) => prev + current, '');
  pnlCatalogo.innerHTML = catalogoHTML;
}