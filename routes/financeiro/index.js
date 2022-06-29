export default () => {
  const container = document.createElement("div");
  container.classList.add('containerMainSingle');

  const template = `
  <section class="sectionCard cardSingle">
      <img class="iconCard" src="./image/reembolso.svg"/>
      <button class="btncard">Reembolso</button>
  </section> 
`;

  container.innerHTML = template;

  return container;
}