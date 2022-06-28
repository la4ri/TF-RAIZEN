export default () => {
  const container = document.createElement("div");

  const template = `<p> Olá Educacional </p> `;

  container.innerHTML = template;

  return container;
}