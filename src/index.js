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

console.log(window.location.hash)

let pageHash = document.querySelector('.pageMain')
let pageFinanceiro = document.querySelector('.pageFinanceiro')
let pageEducacional = document.querySelector('.pageEducacional')
let pageServicos = document.querySelector('.pageServicos')

const redirect = () => {
  window.addEventListener("hashchange", () => {
    console.log(window.location.hash)
    if(window.location.hash === "#servicos"){
      pageHash.classList.remove('bolder');
      pageFinanceiro.classList.remove('bolder');
      pageEducacional.classList.remove('bolder');
      pageServicos.classList.add('bolder');
    }else if(window.location.hash === "#financeiro"){
      pageHash.classList.remove('bolder');
      pageFinanceiro.classList.add('bolder');
      pageEducacional.classList.remove('bolder');
      pageServicos.classList.remove('bolder');
    }else if(window.location.hash === "#educacional"){
      pageHash.classList.remove('bolder');
      pageFinanceiro.classList.remove('bolder');
      pageEducacional.classList.add('bolder');
      pageServicos.classList.remove('bolder')
    }else if(window.location.hash === ""){
      pageHash.classList.add('bolder');
      pageFinanceiro.classList.remove('bolder');
      pageEducacional.classList.remove('bolder');
      pageServicos.classList.remove('bolder');
    }
    main.innerHTML = "";
    init();
  });
};

window.addEventListener("load", () => {
  init();
  redirect();
})

const darkMode = document.querySelector('.btnModoEscuroOn')

darkMode.addEventListener('click', () =>{
  const darkModeOn = document.querySelector('.iconOn');
  const darkModeOff = document.querySelector('.iconOff');
  const body = document.querySelector('.body');
  const logoRaizen = document.querySelector('.logoRaizen');
  const logoRaizenBranco = document.querySelector('.logoRaizenBranco')
  darkModeOn.classList.toggle('off');
  darkModeOff.classList.toggle('off');
  logoRaizen.classList.toggle('off');
  logoRaizenBranco.classList.toggle('off');

  if(darkModeOn.classList.contains('off')){
    body.classList.add('bodyescuro')
    document.body.style.setProperty('--fontColor' , 'white')
    document.body.style.setProperty('--svgFill' , 'white')
  }else{
    body.classList.remove('bodyescuro')
    document.body.style.setProperty('--fontColor' , 'black')
    document.body.style.setProperty('--svgFill' , '#781E77')
  }
})

const btnSearch = document.querySelector('.iconSearch')

btnSearch.addEventListener('click', openSearch)


  function openSearch (){
  const inputSearch = document.querySelector('.seachInput')
  inputSearch.classList.toggle('off')
}
let nomeCard = document.getElementById('searchType');
let inputSearchMobile = document.querySelector('#searchTypeMobile')


function searchCards() {
  let find = nomeCard.value
  let findMobile = inputSearchMobile.value

  find = find.toLowerCase();
  findMobile = findMobile.toLowerCase();
  let classCard = document.getElementsByClassName('sectionCard');
  


  for (let i = 0; i < classCard.length; i++) {
    if (!classCard[i].innerHTML.toLowerCase().includes(find)||!classCard[i].innerHTML.toLowerCase().includes(findMobile)) {
      classCard[i].style.display = "none";
    }
    else {
      classCard[i].style.display = "flex";
    }
  }

  

}




inputSearchMobile.addEventListener("keyup", searchCards);
nomeCard.addEventListener("keyup", searchCards);

