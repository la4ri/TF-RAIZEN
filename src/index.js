import gestaoPessoal from "./routes/gestaoPessoal/index.js";
import financeiro from "./routes/financeiro/index.js";
import educacional from "./routes/educacional/index.js";
import servicos from "./routes/servicos/index.js";


const main = document.querySelector("#root");

const init = () => {

  main.innerHTML = "";

  switch (window.location.hash) {
    case "#":
      main.appendChild(gestaoPessoal());
      break;
    case "#financeiro":
      main.appendChild(financeiro());
      break;
    case "#educacional":
      main.appendChild(educacional());
      break;
    case "#servicos":
      main.appendChild(servicos());
      break;
    default:
      main.appendChild(gestaoPessoal());
  }
}

const redirect = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    init();
  });
};

window.addEventListener("load", () => {
  init();
  redirect();
})
