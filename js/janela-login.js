const selecionaClasse = (elemento) => document.querySelector(elemento);

const embrulho = selecionaClasse(".embrulho");
const conectarLink = selecionaClasse(".conectar-link");
const cadastroLink = selecionaClasse(".cadastro-link");
const botaoJanelaConectar = selecionaClasse(".botao-login");
const iconeFechar = selecionaClasse(".icone-fechar");

cadastroLink.addEventListener("click", () => {
  embrulho.classList.add("active");
});

conectarLink.addEventListener("click", () => {
  embrulho.classList.remove("active");
});

botaoJanelaConectar.addEventListener("click", () => {
  embrulho.classList.add("ativa-janela-conectar");
  secaoSobre.classList.add("nenhum-display");
  secaoHobbies.classList.add("nenhum-display");
  secaoExperimentos.classList.add("nenhum-display");
  secaoProjetos.classList.add("nenhum-display");
});

iconeFechar.addEventListener("click", () => {
  embrulho.classList.remove("ativa-janela-conectar");
});
