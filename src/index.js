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

var nomeCard = document.getElementById('searchType');

function searchCards() {
  let find = nomeCard.value
  console.log(find);

  find = find.toLowerCase();
  let classCard = document.getElementsByClassName('sectionCard');
  console.log(classCard);

  for (let i = 0; i < classCard.length; i++) {
    if (!classCard[i].innerHTML.toLowerCase().includes(find)) {
      classCard[i].style.display = "none";
    }
    else {
      classCard[i].style.display = "list-item";
    }
  }

}

nomeCard.addEventListener("keyup", searchCards);
