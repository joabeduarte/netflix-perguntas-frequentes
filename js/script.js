const dt = document.querySelectorAll(".perguntas-lista dt");
const dd = document.querySelectorAll(".perguntas-lista dd");

function handlePergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  dt.forEach((element) => {
    if (element !== pergunta) {
      element.removeAttribute("aria-expanded", true);
    }
  });
  dd.forEach((element) => {
    if (element !== resposta) {
      element.classList.remove("on");
    }
  });
  resposta.classList.toggle("on");
  resposta.classList.add("yes");
  const on = resposta.classList.contains("on");
  pergunta.setAttribute("aria-expanded", on);
}

function handleDt(pergunta) {
  pergunta.addEventListener("click", handlePergunta);
}

dt.forEach(handleDt);

// button

document.querySelector(".button").disabled = true;
