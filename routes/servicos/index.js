export default () => {
    const container = document.createElement("div");
    container.classList.add('containerMain');

    const template = `
  <section class="sectionCard cardMagenta">
      <img class="iconCard" src="./image/reserva-de-salas.svg"/>
      <button class="btncard">Reserva de Salas</button>
  </section>
  <section class="sectionCard cardRoxo">
      <img class="iconCard" src="./image/video-conferencia.svg"/>
      <button class="btncard">Áudio Conferências</button>
  </section>
  <section class="sectionCard cardAzul">
      <img class="iconCard" src="./image/central-atendimento.svg"/>
      <button class="btncard">Central de Ajuda</button>
  </section>
  `;

    container.innerHTML = template;

    return container;
}