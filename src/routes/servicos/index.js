export default () => {
  const container = document.createElement("div");

  const template = `<p>Olá serviços</p> `;

  container.innerHTML = template;

  return container;
}