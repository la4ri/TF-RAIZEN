export default () => {
  const container = document.createElement("div");

  const template = `<p>Olá Financeiro</p> `;

  container.innerHTML = template;

  return container;
}