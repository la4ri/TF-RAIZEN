export default () => {
    const container = document.createElement("div");
    container.classList.add('containerMain');

    const template = `
  <section class="sectionCard">
      <img class="iconCard" src="../../image/free_icon_1.svg"/>
      <button class="btncard">Controle de Ponto</button>
  </section>
  <section class="sectionCard">
      <img class="iconCard" src="../../image/estruturaOrganizacional.svg"/>
      <button class="btncard">Estrutura Organizacional</button>
  </section>
  <section class="sectionCard">
      <img class="iconCard" src="../../image/holerite.svg"/>
      <button class="btncard">Holerite</button>
  </section>
  <section class="sectionCard">
      <img class="iconCard" src="../../image/ferias.svg"/>
      <button class="btncard">Ferias</button>
  </section>
  <section class="sectionCard">
      <img class="iconCard" src="../../image/desligamento.svg"/>
      <button class="btncard">Portal de desligamento</button>
  </section>
  `;

    container.innerHTML = template;

    return container;
}