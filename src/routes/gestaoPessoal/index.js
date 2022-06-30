export default () => {
    const container = document.createElement("div");
    container.classList.add('containerMain');

    const template = `
  <section class="sectionCard cardMagenta">
      <img class="iconCard" src="./image/controle-de-ponto.svg"/>
      <button class="btncard">Controle de Ponto</button>
  </section>
  <section class="sectionCard cardRoxo">
      <img class="iconCard" src="./image/fluxo-de-trabalho.svg"/>
      <button class="btncard">Estrutura Organizacional</button>
  </section>
  <section class="sectionCard cardAzul">
      <img class="iconCard" src="./image/holerite.svg"/>
      <button class="btncard">Holerite</button>
  </section>
  <section class="sectionCard cardMagenta">
      <img class="iconCard" src="./image/ferias.svg"/>
      <button class="btncard">Férias</button>
  </section>
  <section class="sectionCard cardRoxo">
      <img class="iconCard" src="./image/desligamento.svg"/>
      <button class="btncard">Portal de Desligamento</button>
  </section>
  `;

    container.innerHTML = template;

    return container;
}