export default () => {
  const container = document.createElement("div");
  container.classList.add('containerMainSingle');

  const template = `
  <section class="sectionCard cardSingle">
      <img class="iconCard" src="./image/educacional.svg"/>
      <button class="btncard">Treinamentos</button>
  </section> `;

  container.innerHTML = template;

  return container;
}