export default () => {
    const container = document.createElement("div");
    container.classList.add('containerMain');

  const template = `
  <section class="sectionCard cardMagenta">
      <img class="iconCard" src="../../image/reservaSalas.svg"/>
      <button class="btncard">Reserva de Salas</button>
  </section>
  <section class="sectionCard cardRoxo">
      <img class="iconCard" src="../../image/audioConferencias.svg"/>
      <button class="btncard">Audio Conferências</button>
  </section>
  <section class="sectionCard cardAzul">
      <img class="iconCard" src="../../image/serviceDesk.svg"/>
      <button class="btncard">Service Desk</button>
  </section>
  `;

    container.innerHTML = template;

    return container;
}