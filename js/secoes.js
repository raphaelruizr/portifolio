const selecionaClasseSecao = (elemento) => document.querySelector(elemento);

const botaoSobre = selecionaClasseSecao(".botao-sobre");
const botaoHobbies = selecionaClasseSecao(".botao-hobbies");
const botaoExperimentos = selecionaClasseSecao(".botao-experimentos");
const botaoProjetos = selecionaClasseSecao(".botao-projetos");

const secaoSobre = selecionaClasseSecao(".sobre");
const secaoHobbies = selecionaClasseSecao(".hobbies");
const secaoExperimentos = selecionaClasseSecao(".experimentos");
const secaoProjetos = selecionaClasseSecao(".projetos");

const abrirJanelaSecao = (botao, secao) => {
  botao.addEventListener("click", () => {
    secaoSobre.classList.add("nenhum-display");
    secaoHobbies.classList.add("nenhum-display");
    secaoExperimentos.classList.add("nenhum-display");
    secaoProjetos.classList.add("nenhum-display");

    secao.classList.remove("nenhum-display");
    embrulho.classList.remove("ativa-janela-conectar");
  });
};

abrirJanelaSecao(botaoSobre, secaoSobre);

abrirJanelaSecao(botaoHobbies, secaoHobbies);

abrirJanelaSecao(botaoExperimentos, secaoExperimentos);

abrirJanelaSecao(botaoProjetos, secaoProjetos);

