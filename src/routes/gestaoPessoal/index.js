export default () => {
  const container = document.createElement("div");

  const template = `<p> Olá Gestao Pessoal</p> `;

  container.innerHTML = template;

  return container;
}